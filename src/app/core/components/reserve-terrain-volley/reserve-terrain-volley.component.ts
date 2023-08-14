import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ReservationService } from '../../services/reservation.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDatesAboutReservation } from '../../models/GetDatesAboutReservation';
import { ReservationDto } from '../../models/ReservationDto';
import { DateHelper } from '../../utils/DateHelper';
import { BaseComponent } from '../../helpers/BaseComponent';

@Component({
  selector: 'app-reserve-terrain-volley',
  templateUrl: './reserve-terrain-volley.component.html',
  styleUrls: ['./reserve-terrain-volley.component.css']
})
export class ReserveTerrainVolleyComponent extends BaseComponent {

  //  // for stocking the list of dates generating in the class DateHelper
  //  dates: { day: string, dates: Date[] }[] = [];
  //  // quand on click sur reserver cette variable stock la valeur de date correspond au button
  //  selectedDate: Date;
  //  // quand le modal pop up et on click sur un terrain cette variable va prendre la valeur de terrain soit terrain1 soit terrain2
  //  selectedTerrain: string | null = null;
  //  //Two data binding in the form : ce variable contient la valeur de je joue contre qui
  //  againstwho: string = '';
  //  // contient la référence du Modal lorsque on clique sur la button réserver
  //  modalRef: NgbModalRef | null = null;
  //  //cette variable contient les dates que le current user a réservé on les remplis on appelant une api
  //  currentUserReservedSlots: Date[] = [];
  //  // //cette variable contient les dates que les autres utilisateurs ont réservé on les remplis on appelant une api
  //  otherUsersReservedSlots: Date[] = [];
  //  // email of logged user
  //  emailofloggedUser: string;
  //   constructor(private modalService: NgbModal, protected reservationService: ReservationService, private tokenStorageService: TokenStorageService, private router: Router, private route: ActivatedRoute) {
  //    this.emailofloggedUser = this.tokenStorageService.getUser().email;
  //  }
 
  //  // when rendering the first thing is to fill up the list of date; 14-00 ,15-00,........
  //  // aprés on appelle au méthode loadReservedSlots qui va appeler deux api pour remplir les currentUserReservedSlots et les otherUsersReservedSlots
  //  // pour faire la logique de reserver - supprimer -reserved
  //  ngOnInit() {
  //   this.selectedTerrain = localStorage.getItem('selectedTerrain');
  //    this.dates = DateHelper.generateDateList();
  //    this.loadReservedSlots();
  //  }
 
 
  //  // une méthode qui fait appel au api pour retrive les dates occupé par le current user et par les autres utilisateurs
  //  loadReservedSlots() {
 
 
  //    if (this.selectedTerrain != null) {
 
  //      console.log("ayeeeeeeeeeeeeeeeeeeeeeeeeh ayeeeeeeeeeeeeeeeh");
 
  //      const details = new GetDatesAboutReservation(this.emailofloggedUser, this.selectedTerrain);
  //      this.reservationService.getAllreservationOfCurrentUser(details).subscribe((reservedSlots: Date[]) => {
  //        this.currentUserReservedSlots = reservedSlots;
  //        this.reservationService.setIsLoading(false);
  //      });
 
  //      this.reservationService.getAllreservationsOfothersUsers(details).subscribe((reservedSlots: Date[]) => {
  //        this.otherUsersReservedSlots = reservedSlots;
  //        this.reservationService.setIsLoading(false);
  //      });
  //    }
 
 
  //  }
 
  //  //c'est un logique simple : les dates des current users que l'on receive depuis l'api si il existe une date
  //  // comme la date du parametre dans la liste des dates de current user recu depuis l'api alors c'est true donc
  //  // la button supprimer qui doit étre affiché
  //  isCurrentUserReserved(date: Date): boolean {
  //    // console.log("isCurrentUserReserved runninig.........", this.currentUserReservedSlots.map((slot) => new Date(slot)).some((slot) => slot.getTime() == new Date(date).getTime()));
  //    // const test = this.currentUserReservedSlots.map((slot) => new Date(slot));
  //    // console.log("liste of date current user", test,"+ date choisi",date);
  //    return this.currentUserReservedSlots.map((slot) => new Date(slot)).some((slot) => slot.getTime() == new Date(date).getTime())
  //  }
 
  //  //c'est un logique simple : les dates des autres users que l'on receive depuis l'api si il existe une date
  //  // comme la date du parametre dans la liste des dates de current user recu depuis l'api alors c'est true donc
  //  // la button Reserved qui doit étre affiché
  //  isOtherUsersReserved(date: Date): boolean {
  //    // console.log("isOtherUsersReserved runninig.........",this.otherUsersReservedSlots.map((slot) => new Date(slot)).some((slot) => slot.getTime() == new Date(date).getTime()));
  //    return this.otherUsersReservedSlots.map((slot) => new Date(slot)).some((slot) => slot.getTime() == new Date(date).getTime())
  //  }
 
  
  //  handleclick(date: Date) {
  //    let x = this.otherUsersReservedSlots.map((slot) => new Date(slot)).some((slot) => {
  //      console.log(slot, date, "jjaj");
  //      return slot.getTime() == new Date(date).getTime();
  //    })
  //    console.log(x);
 
  //  }
 
 
 
 
  //  openReservationModal(date: Date, content: any) {
  //    this.selectedDate = date;
  //    this.againstwho = '';
  //    this.modalRef = this.modalService.open(content);
  //    console.log("hamid", this.selectedTerrain);
  //  }
 
 
 
  //  sendReservation(modal: NgbModalRef) {
  //    if (this.selectedDate && this.selectedTerrain && this.againstwho.trim() !== '') {
 
  //      localStorage.removeItem("selectedTerrain");
 
  //      console.log("selected date :) ", this.selectedDate);
  //      // Construct the request data
  //      const reservation = new ReservationDto(this.selectedDate, this.selectedTerrain, this.againstwho);
  //      console.log(reservation);
  //      // Send the request
  //      this.reservationService.addReservation(reservation).subscribe(
  //        (response) => {
  //          console.log(response);
  //          this.reservationService.setIsLoading(false);
  //          // Close the modal
  //          modal.dismiss();
  //          this.loadReservedSlots();
  //          console.log("saffi hadi hya");
 
  //        },
  //        (error) => {
  //          console.log(error);
  //        }
  //      );
  //    }
  //  }
 
 
 
 
 
 
 
 
 
  //  formatDateRange(date: Date): string {
  //    const startTime = this.formatTime(date.getHours(), date.getMinutes());
  //    const endTime = this.formatTime(date.getHours() + 1, date.getMinutes());
  //    return `${startTime} - ${endTime}`;
  //  }
 
  //  formatTime(hours: number, minutes: number): string {
  //    const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
  //    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  //    if (hours == 24) {
  //      return `00:${formattedMinutes}`;
  //    }
  //    return `${formattedHours}:${formattedMinutes}`;
  //  }
 
 
 

}
