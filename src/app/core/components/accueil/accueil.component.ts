import { Component } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  isCollapsed =true;
  messageErrornotAuthentificated : boolean = false;
  constructor(private tokenStorageService: TokenStorageService, private router : Router){
    console.log("accueil is rendered constructor");
  }

  ngOnInit(){
    console.log("accueil is rendered ngOnInit");
  }


  handleReserverMatch(){

    if(!this.tokenStorageService.isAutheticated()){
      console.log("user is not authenticated");
      this.messageErrornotAuthentificated=true;
      return;
    }else{
      this.messageErrornotAuthentificated=false;
        const authUser = this.tokenStorageService.getUser();
        console.log(authUser);
        if(authUser.role=="ROLE_ADMIN"){
          this.router.navigate(['/home/reserveradmin']);
        }else if(authUser.role=="ROLE_USER"){
          this.router.navigate(['/home/reserveruser']);
        }else{
          console.log("not authorized");
        }
    }

  }
}
