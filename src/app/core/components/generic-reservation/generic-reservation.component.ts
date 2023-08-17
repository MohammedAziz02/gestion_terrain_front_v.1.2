import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ReservationService } from '../../services/reservation.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DateHelper } from '../../utils/DateHelper';
import { GetDatesAboutReservation } from '../../models/GetDatesAboutReservation';
import { DeleteReservationDto } from '../../models/DeleteReservationDto';
import { ReservationDto } from '../../models/ReservationDto';
import { PdfGeneratorService } from '../../services/pdf-generator.service';
import { WhetherService } from '../../services/whether.service';

@Component({
  selector: 'app-generic-reservation',
  templateUrl: './generic-reservation.component.html',
  styleUrls: ['./generic-reservation.component.css'],
})
export class GenericReservationComponent {
  // for stocking the list of dates generating in the class DateHelper
  dates: { day: string; dates: Date[] }[] = [];
  // quand on click sur reserver cette variable stock la valeur de date correspond au button
  selectedDate: Date;
  // quand le modal pop up et on click sur un terrain cette variable va prendre la valeur de terrain soit terrain1 soit terrain2
  selectedTerrain: string = '';
  //Two data binding in the form : ce variable contient la valeur de je joue contre qui
  againstwho: string = '';
  // contient la référence du Modal lorsque on clique sur la button réserver
  modalRef: NgbModalRef | null = null;
  //cette variable contient les dates que le current user a réservé on les remplis on appelant une api
  currentUserReservedSlots: Date[] = [];
  // //cette variable contient les dates que les autres utilisateurs ont réservé on les remplis on appelant une api
  otherUsersReservedSlots: Date[] = [];
  // email of logged user
  emailofloggedUser: string;
  // date to delete
  dateToDelete: Date;
  // boolean an user can reserve only one time per day
  isReserved: boolean = false;
  // Temperature Data
  data: any;
  /// is loading for weather
  isWheatherLoading : Boolean =true;
 

  constructor(
    private modalService: NgbModal,
    protected reservationService: ReservationService,
    private tokenStorageService: TokenStorageService,
    private router: Router,
    private route: ActivatedRoute,
    private pdfgenerator: PdfGeneratorService,
    private whetherService: WhetherService
  ) {
    this.emailofloggedUser = this.tokenStorageService.getUser().email;
  }

  // when rendering the first thing is to fill up the list of date; 14-00 ,15-00,........
  // aprés on appelle au méthode loadReservedSlots qui va appeler deux api pour remplir les currentUserReservedSlots et les otherUsersReservedSlots
  // pour faire la logique de reserver - supprimer -reserved
  ngOnInit() {
    const selectedStadium = localStorage.getItem('selectedTerrain');
    // this.selectedTerrain = localStorage.getItem('selectedTerrain');
    this.selectedTerrain = selectedStadium !== null ? selectedStadium : '';
    const isReserved = localStorage.getItem('isReserved');
    if (isReserved !== null) {
      this.isReserved = isReserved === 'true' ? true : false;
    } else {
      this.isReserved = false;
    }

    this.dates = DateHelper.generateDateList();
    this.loadReservedSlots();

    this.whetherService.getWheatherInformations(35.2516, -3.9372).subscribe(
      (response) => {
        this.isWheatherLoading= false;
        // console.log(response);
        this.data = response;
      },
      (error) => {
        this.isWheatherLoading= false;
        console.log(error);
      }
    );
  }



   getTemperatureFromDate(date : Date) {
    const isoDate = date.toISOString(); // Convert date to ISO8601 format
    const foundedDate=isoDate.slice(0, 16);
    // console.log(foundedDate,"converted");

    // console.log(this.data.hourly.time.indexOf(foundedDate),"aa");
    const index = this.data.hourly.time.indexOf(foundedDate); // Find the index of the ISO8601 date in the JSON data
    // console.log(this.data.hourly,"hourly");
    
    if (index !== -1) {
      // console.log("l9ah wlahila l9ah")
      return this.data.hourly.temperature_2m[index]; // Return the temperature corresponding to the index
    } else {
      // console.log("mal9a walo")
      return null; // Return null if the date is not found in the JSON data
    }
  }


  // une méthode qui fait appel au api pour retrive les dates occupé par le current user et par les autres utilisateurs
  loadReservedSlots() {
    const details = new GetDatesAboutReservation(
      this.emailofloggedUser,
      this.selectedTerrain
    );
    this.reservationService
      .getAllreservationOfCurrentUser(details)
      .subscribe((reservedSlots: Date[]) => {
        this.currentUserReservedSlots = reservedSlots;
        this.reservationService.setIsLoading(false);
      });

    this.reservationService
      .getAllreservationsOfothersUsers(details)
      .subscribe((reservedSlots: Date[]) => {
        this.otherUsersReservedSlots = reservedSlots;
        this.reservationService.setIsLoading(false);
      });
  }

  //c'est un logique simple : les dates des current users que l'on receive depuis l'api si il existe une date
  // comme la date du parametre dans la liste des dates de current user recu depuis l'api alors c'est true donc
  // la button supprimer qui doit étre affiché
  isCurrentUserReserved(date: Date): boolean {
    // console.log("isCurrentUserReserved runninig.........", this.currentUserReservedSlots.map((slot) => new Date(slot)).some((slot) => slot.getTime() == new Date(date).getTime()));
    // const test = this.currentUserReservedSlots.map((slot) => new Date(slot));
    // console.log("liste of date current user", test,"+ date choisi",date);
    return this.currentUserReservedSlots
      .map((slot) => new Date(slot))
      .some((slot) => slot.getTime() == new Date(date).getTime());
  }

  //c'est un logique simple : les dates des autres users que l'on receive depuis l'api si il existe une date
  // comme la date du parametre dans la liste des dates de current user recu depuis l'api alors c'est true donc
  // la button Reserved qui doit étre affiché
  isOtherUsersReserved(date: Date): boolean {
    // console.log("isOtherUsersReserved runninig.........",this.otherUsersReservedSlots.map((slot) => new Date(slot)).some((slot) => slot.getTime() == new Date(date).getTime()));
    return this.otherUsersReservedSlots
      .map((slot) => new Date(slot))
      .some((slot) => slot.getTime() == new Date(date).getTime());
  }

  handleclick(date: Date) {
    let x = this.otherUsersReservedSlots
      .map((slot) => new Date(slot))
      .some((slot) => {
        console.log(slot, date, 'jjaj');
        return slot.getTime() == new Date(date).getTime();
      });
    console.log(x);
  }

  handleCancel(modal: NgbModalRef) {
    const deleteReservation = new DeleteReservationDto(
      this.dateToDelete,
      this.selectedTerrain
    );
    this.reservationService.deleteReservation(deleteReservation).subscribe(
      (response) => {
        this.isReserved = false;
        localStorage.removeItem('isReserved');
        this.reservationService.setIsLoading(false);
        console.log(response);
        modal.dismiss();
        this.loadReservedSlots();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openReservationModal(date: Date, content: any) {
    this.selectedDate = date;
    this.againstwho = '';
    this.modalRef = this.modalService.open(content);

    console.log('hamid', date);
  }

  showmodaldelete(date: Date, content: any) {
    this.dateToDelete = date;
    this.modalRef = this.modalService.open(content);
  }

  sendReservation(modal: NgbModalRef) {
    if (
      this.selectedDate &&
      this.selectedTerrain &&
      this.againstwho.trim() !== ''
    ) {
      // localStorage.removeItem("selectedTerrain");

      console.log('selected date :) ', this.selectedDate);
      // Construct the request data
      const reservation = new ReservationDto(
        this.selectedDate,
        this.selectedTerrain,
        this.againstwho
      );
      console.log(reservation);
      // Send the request
      this.reservationService.addReservation(reservation).subscribe(
        (response) => {
          console.log(response);
          this.reservationService.setIsLoading(false);
          this.isReserved = true;
          localStorage.setItem('isReserved', 'true');
          // Close the modal
          modal.dismiss();
          this.loadReservedSlots();
          this.pdfgenerator.generateTicket(
            this.emailofloggedUser,
            this.againstwho,
            this.selectedTerrain,
            this.selectedDate
          );
          console.log('saffi hadi hya');
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  formatDateRange(date: Date): string {
    return DateHelper.formatDateRange(date);
  }
}
