import { Component } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';
import { ReservationService } from '../../services/reservation.service';
import { DateHelper } from '../../utils/DateHelper';
import { MatchOfToday } from '../../models/matchOfToday';
import Swal from 'sweetalert2';
import { SweatAlertServiceService } from '../../shared/sweat-alert-service.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  matchtodaydata : any;

  isCollapsed =true;


  constructor(private tokenStorageService: TokenStorageService, private router : Router,private reservationService : ReservationService,private sweatAlertServiceService : SweatAlertServiceService) {
    console.log("accueil is rendered constructor");
  }

  ngOnInit(){
    console.log("accueil is rendered ngOnInit");
    this.matchtodaydata=this.getMatchOfToday("terrain football");
  }


  getMatchOfToday(terrain : string){
    const today = new Date();
    const date00 = DateHelper.formatDateto00_00_00(today);
    const date23 = DateHelper.formatDateto23_59_59(today);
    const matchOfToday = new MatchOfToday(date00,date23,terrain);
    this.reservationService.getMatchesofToday(matchOfToday).subscribe(
      data => {
        console.log(data);
        this.matchtodaydata = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  handleClick(terrain : string){
    this.getMatchOfToday(terrain);
  }

  


  handleReserverMatch(){

    if(!this.tokenStorageService.isAutheticated()){
      console.log("user is not authenticated");
      this.sweatAlertServiceService.showError("You're not authenticated please register first!");
      return;
    }else{
        const authUser = this.tokenStorageService.getUser();
        console.log(authUser);
        if(authUser.role=="ROLE_ADMIN"){
          this.router.navigate(['/home/reserveradmin']);
        }else if(authUser.role=="ROLE_USER"){
          this.router.navigate(['/home/reserve']);
        }else{
          console.log("not authorized");
        }
    }


  }
}
