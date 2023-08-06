import { Component } from '@angular/core';

@Component({
  selector: 'app-reservationterrain-admin',
  templateUrl: './reservationterrain-admin.component.html',
  styleUrls: ['./reservationterrain-admin.component.css']
})
export class ReservationterrainAdminComponent {

  constructor(){
    console.log("reservationterrainadmin is rendered constructor");
  }

  ngOnInit(){
    console.log("reservationterrainadmin is rendered ngOnInit");
  }

}
