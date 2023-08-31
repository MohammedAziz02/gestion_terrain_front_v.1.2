import { Component } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { DateHelper } from '../../utils/DateHelper';
import { SweatAlertServiceService } from '../../shared/sweat-alert-service.service';
import { BaseComponent } from '../../helpers/BaseComponent';

@Component({
  selector: 'app-reservationterrain-admin',
  templateUrl: './reservation-admin.component.html',
  styleUrls: ['./reservation-admin.component.css']
})
export class ReservationAdminComponent   extends BaseComponent{

  allReservations: any;

  isRender: boolean = false;

  constructor(protected reservationService: ReservationService,private swertAlertService : SweatAlertServiceService) {
    console.log("reservationterrainadmin is rendered constructor");
    super();
  }

  ngOnInit() {
    console.log("reservationterrainadmin is rendered ngOnInit");
    this.getAllReservations();
    console.log("ngoninit--------->", this.isRender);
  }

   getAllReservations() {
   
    this.reservationService.getAllReservations().subscribe((data) => {
      this.isRender = true;
      this.allReservations = data;
      this.reservationService.setIsLoading(false);
      console.log(this.allReservations);
    },
      (err) => {
        this.reservationService.setIsLoading(false);
        console.log(err);
      })

    console.log("getAllReservations--------->", this.isRender);
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
        this.isRender = false;
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
