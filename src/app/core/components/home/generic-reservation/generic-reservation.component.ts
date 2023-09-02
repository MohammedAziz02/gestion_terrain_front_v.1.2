import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ReservationService } from '../../../services/reservation.service';
import { TokenStorageService } from '../../../services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DateHelper } from '../../../utils/DateHelper';
import { GetDatesAboutReservation } from '../../../models/GetDatesAboutReservation';
import { DeleteReservationDto } from '../../../models/DeleteReservationDto';
import { ReservationDto } from '../../../models/ReservationDto';
import { PdfGeneratorService } from '../../../services/pdf-generator.service';
import { WhetherService } from '../../../services/whether.service';
import { UserReservationDate } from '../../../models/UserReservationDate';

@Component({
  selector: 'app-generic-reservation',
  templateUrl: './generic-reservation.component.html',
  styleUrls: ['./generic-reservation.component.css'],
})
export class GenericReservationComponent {
  // for stocking the list of dates generating in the class DateHelper
  dates: { day: string; dates: Date[] }[] = [];
  // quand on click sur reserver cette variable stock la valeur de date correspond au button
  // selectedDate: Date;
  // quand le modal pop up et on click sur un terrain cette variable va prendre la valeur de terrain soit terrain football soit terrain volleyball
  selectedTerrain: string = '';
  //Two dataoftemperature binding in the form : ce variable contient la valeur de je joue contre qui
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
  // Temperature dataoftemperature
  dataoftemperature: any;
  /// is loading for weather
  isWheatherLoading: Boolean = true;
  selectedDate: Date;
  isreservatefirstday: boolean = false;
  isreservatesecondday: boolean = false;

  selectedDayIndex: number = 0;

  constructor(
    protected modalService: NgbModal,
    protected reservationService: ReservationService,
    private tokenStorageService: TokenStorageService,
    private pdfgenerator: PdfGeneratorService,
    private whetherService: WhetherService
  ) {
    this.emailofloggedUser = this.tokenStorageService.getUser().email;
  }

  
  ngOnInit(): void {
    this.begin();
    this.verifyUserReservation();
  }


  // pour vérifier c'est l'utilisateur a réservé le terrain dans un jour ou non soit terrain de foot soit de voley
  verifyUserReservation(){
    this.isreservatefirstday = false;
    this.isreservatesecondday = false;
    const debut_frist = DateHelper.formatDateto00_00_00(DateHelper.tomorrowDate());
    console.log("debut_frist", debut_frist);
    const end_first = DateHelper.formatDateto23_59_59(DateHelper.tomorrowDate());
    console.log("end_first ", end_first);
    const x = new UserReservationDate(this.emailofloggedUser, this.selectedTerrain, debut_frist, end_first);
    this.reservationService.isUserReservatebetween2dates(x).subscribe(
      (response) => {
        console.log(response)
        if(response > 0){
          this.isreservatefirstday = true;
        }
      },
      (err) => {
        console.log(err);
      })
    
    const debut_second = DateHelper.formatDateto00_00_00(DateHelper.afterTomorrowDate());
    console.log("debut_second", debut_second);
    const end_second = DateHelper.formatDateto23_59_59(DateHelper.afterTomorrowDate());
    console.log("end_second ", end_second);
    const y = new UserReservationDate(this.emailofloggedUser, this.selectedTerrain, debut_second, end_second);
    this.reservationService.isUserReservatebetween2dates(y).subscribe(
      (response) => {
        console.log(response)
        if(response > 0){
          this.isreservatesecondday = true;
        }
      },
      (err) => {
        console.log(err);
      })
    }

  // c'est méthode qui permet de charger la page par les dates et par la température
  begin() {
    const selectedStadium = localStorage.getItem('selectedTerrain');
    // this.selectedTerrain = localStorage.getItem('selectedTerrain');
    this.selectedTerrain = selectedStadium !== null ? selectedStadium : '';
    this.dates = DateHelper.generateDateList();
    this.loadReservedSlots();
    // alhoceima Weather
    this.whetherService.getWheatherInformations(35.2516, -3.9372).subscribe(
      (response) => {
        this.isWheatherLoading = false;
        this.dataoftemperature = response;
        console.log("this.temperature ",this.dataoftemperature);
      },
      (error) => {
        this.isWheatherLoading = false;
        console.log(error);
      }
    );

    console.log("this.dates ",this.dates);
  }

  goback(){
    window.history.back();
  }



  // pour afficher la température a la date time convenable
  getTemperatureFromDate(date: Date) {
    const isoDate = date.toISOString(); 
    const foundedDate = isoDate.slice(0, 16);
    const index = this.dataoftemperature.hourly.time.indexOf(foundedDate); // Find the index of the ISO8601 date in the JSON dataoftemperature
    if (index !== -1) {
      return this.dataoftemperature.hourly.temperature_2m[index]; // Return the temperature corresponding to the index
    } else {
      return null; // Return null if the date is not found in the JSON dataoftemperature
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


  showmodaldelete(date: Date, content: any) {
    this.dateToDelete = date;
    this.modalRef = this.modalService.open(content);
  }



  ifDisabled(date: Date): boolean {
    let day1 = DateHelper.formatDate(DateHelper.tomorrowDate());
    let dayoftemplate = DateHelper.formatDate(date);
    if (day1 === dayoftemplate && this.isreservatefirstday) {
      return true;
    }
    let formattedDate = DateHelper.formatDate(DateHelper.afterTomorrowDate());
    if (formattedDate === dayoftemplate && this.isreservatesecondday) {
      return true;
    }

    return false;

  }




  handleCancel(modal: NgbModalRef) {
    const deleteReservation = new DeleteReservationDto(
      this.dateToDelete,
      this.selectedTerrain
    );
    this.reservationService.deleteReservation(deleteReservation).subscribe(
      (response) => {

        this.reservationService.setIsLoading(false);
        console.log(response);
        modal.dismiss();
        this.loadReservedSlots();
        this.verifyUserReservation();
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




sendReservation(modal: NgbModalRef) {
  if (
    this.selectedDate &&
    this.selectedTerrain &&
    this.againstwho.trim() !== ''
  ) {
    

    console.log('selected date :) ', this.selectedDate);
    // Construct the request dataoftemperature
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

        // Close the modal
        modal.dismiss();
        this.loadReservedSlots();
        this.verifyUserReservation();
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



   extractDateFromArray(firstDate: Date): string {
     const formattedDate = `${firstDate.getDate()} ${firstDate.toLocaleString('default', { month: 'long' })} ${firstDate.getFullYear()}`;
      return formattedDate;
   }
}
