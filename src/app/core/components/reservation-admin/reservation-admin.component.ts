import { Component } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { DateHelper } from '../../utils/DateHelper';
import { get } from 'jquery';
import Swal from 'sweetalert2';
import { SweatAlertServiceService } from '../../shared/sweat-alert-service.service';

@Component({
  selector: 'app-reservationterrain-admin',
  templateUrl: './reservation-admin.component.html',
  styleUrls: ['./reservation-admin.component.css']
})
export class ReservationAdminComponent {

  allReservations: any;

  tData: boolean = false;

  constructor(protected reservationService: ReservationService,private swertAlertService : SweatAlertServiceService) {
    console.log("reservationterrainadmin is rendered constructor");
  }

  ngOnInit() {
    console.log("reservationterrainadmin is rendered ngOnInit");
    this.getAllReservations();
    console.log("ngoninit--------->", this.tData);
  }

   getAllReservations() {
   
    this.reservationService.getAllReservations().subscribe((data) => {
      this.tData = true;
      this.allReservations = data;
      this.reservationService.setIsLoading(false);
      console.log(this.allReservations);
    },
      (err) => {
        this.reservationService.setIsLoading(false);
        console.log(err);
      })

    console.log("getAllReservations--------->", this.tData);
  }


  handleDeleteReservation(id: number) {
   this.swertAlertService.showDelete("Are u sure !!").then((result : any) => {
      if (result.isConfirmed) {
        this.deleteReservation(id);
      }
    });
  }
  
  deleteReservation(id: number) {
    this.reservationService.deleteReservationById(id).subscribe(
      (data) => {
        console.log(data);
        this.tData = false;
        this.reservationService.setIsLoading(false);
        this.getAllReservations();
      },
      (err) => {
        console.log(err);
        this.reservationService.setIsLoading(false);
      }
    );
  }
  



  formatDateRange(date: string) {
    const dateofmatch = new Date(date);
    return DateHelper.formatDateRange(dateofmatch);
  }

  formatDateWithHoursAndSecondes(date: string) {
    return DateHelper.formatDatewithHoursandSecondes(date);
  }

  formatDate(date: string) {
    const dateofmatch = new Date(date);
    return DateHelper.formatDate(dateofmatch);
  }

}
