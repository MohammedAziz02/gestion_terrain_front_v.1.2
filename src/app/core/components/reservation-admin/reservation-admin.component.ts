import { Component } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { DateHelper } from '../../utils/DateHelper';
import { get } from 'jquery';

@Component({
  selector: 'app-reservationterrain-admin',
  templateUrl: './reservation-admin.component.html',
  styleUrls: ['./reservation-admin.component.css']
})
export class ReservationAdminComponent {

  allReservations : any;

  constructor(protected reservationService: ReservationService) {
    console.log("reservationterrainadmin is rendered constructor");
  }

  ngOnInit(){
    console.log("reservationterrainadmin is rendered ngOnInit");
    this.getAllReservations();
   
  }

  getAllReservations(){
    this.reservationService.getAllReservations().subscribe((data)=>{
      this.allReservations = data;
      this.reservationService.setIsLoading(false);
      console.log(this.allReservations);
    },
    (err)=>{
      this.reservationService.setIsLoading(false);
      console.log(err);
    })
  }


  handleDeleteReservation(id:number){
    console.log("handleDeleteReservation",id);
    this.reservationService.deleteReservationById(id).subscribe((data)=>{
      console.log(data);
      this.reservationService.setIsLoading(false);
      this.getAllReservations();
    },
    (err)=>{
      console.log(err);
      this.reservationService.setIsLoading(false);
    })
  }



  formatDateRange(date : string){
    const dateofmatch = new Date(date);
    return DateHelper.formatDateRange(dateofmatch);
  }

  formatDateWithHoursAndSecondes(date : string){
    return DateHelper.formatDatewithHoursandSecondes(date);
  }

  formatDate(date : string){
    const dateofmatch = new Date(date);
    return DateHelper.formatDate(dateofmatch);
  }

}
