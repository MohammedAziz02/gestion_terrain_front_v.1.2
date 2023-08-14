import { Component } from '@angular/core';

@Component({
  selector: 'app-reservationterrain-admin',
  templateUrl: './reservation-admin.component.html',
  styleUrls: ['./reservation-admin.component.css']
})
export class ReservationAdminComponent {

  constructor(){
    console.log("reservationterrainadmin is rendered constructor");
  }

  ngOnInit(){
    console.log("reservationterrainadmin is rendered ngOnInit");
  }

}
