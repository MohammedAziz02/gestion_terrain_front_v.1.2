import { Component } from '@angular/core';

@Component({
  selector: 'app-reservationterrain-user',
  templateUrl: './reservationterrain-user.component.html',
  styleUrls: ['./reservationterrain-user.component.css']
})
export class ReservationterrainUserComponent {

  constructor(){
    console.log("reservationterrainuser is rendered constructor");
  }

  ngOnInit(){
    console.log("reservationterrainuser is rendered ngOnInit");
  }
}
