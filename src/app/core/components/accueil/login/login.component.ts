import { Component } from '@angular/core';
import { AuthserviceService } from '../../../services/authservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagesharedsinguploginService } from '../../../shared/messagesharedsinguplogin.service';
import { Location, NgFor } from '@angular/common';
import { Login } from '../../../models/login';
import { TokenStorageService } from '../../../services/token-storage.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // come from signup component
  successmessage: String = "";
  // error message is  error from backend
  errormessage: String = "";
  loginRequest: Login = new Login("", "");
  role: string = "";
  confirmationMessage: string = "";


  constructor(protected authService: AuthserviceService, private messagesharedsinguploginService: MessagesharedsinguploginService, private tokenStorage: TokenStorageService, private router: Router,private route: ActivatedRoute) {
    console.log("login is rendered constructor");
   }

  ngOnInit(): void {
    console.log("login is rendered ngOnInit");
    this.successmessage = this.messagesharedsinguploginService.getMessage();
    if (this.tokenStorage.getToken()) {
       this.role = this.tokenStorage.getUser().role;
    }

    this.route.queryParams.subscribe(params => {
      if (params['message']) {
        this.confirmationMessage = params['message'];
      }
    });
  }

  onSubmit(form: NgForm): void {


    this.authService.login(form.value).subscribe(
      (data) => {
        this.authService.setIsLoading(false);
        console.log("data from login", data);
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.role = this.tokenStorage.getUser().role;
        if (this.role === 'ROLE_ADMIN') {
          this.router.navigate(['/home/reserve']);
        } else if (this.role === 'ROLE_USER') {
          this.router.navigate(['/home/reserve']);
        }
        console.log('Login success');
      },
      (err) => {
        this.authService.setIsLoading(false);
        this.errormessage = err.error?.message || 'An error occurred during login.';
        console.log('Login failed');
      }
    );
  }



}
