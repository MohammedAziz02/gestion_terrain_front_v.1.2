import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'; // Import NgbModal and NgbModalRef
import { DateHelper } from '../../utils/DateHelper';
import { ReservationService } from '../../services/reservation.service';
import { ReservationDto } from '../../models/ReservationDto';
import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';
import { BaseComponent } from '../../helpers/BaseComponent';

@Component({
  selector: 'app-reservationterrain-user',
  templateUrl: './reservation-user.component.html',
  styleUrls: ['./reservation-user.component.css']
})
export class ReservationUserComponent   {


  isCardHovered1: boolean = false;
  isCardHovered2: boolean = false;




  constructor(private router: Router) {
    
   }


  navigateToTerrainFoot() {
    localStorage.setItem('selectedTerrain', 'terrain football');
    this.router.navigate(['/home/terrainfootbal']);
  }

  navigateToTerrainVolley() {
    localStorage.setItem('selectedTerrain', 'terrain volleyball');
    this.router.navigate(['/home/terrainvolley']);
  }



}
