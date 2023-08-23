import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/core/helpers/BaseComponent';
import { PasswordResetDto } from 'src/app/core/models/PasswordResetDto';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent extends BaseComponent {


  newPassword: string;
  confirmPassword: string;

  errorMessage: string;
  token: string;

  successMessage: string;

  constructor(private route: ActivatedRoute, private userService: UserService,private router: Router) {
    super();
  }



  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("NG On INIT update password ..............");

    const token = localStorage.getItem('tokenchangepassword');
    if (!token) {
      this.errorMessage = "Token invalide,... Verify your email and Try Again";
    } else {
      this.token = token;
      this.userService.verifyToken(token).subscribe(
        (isvalid) => {
          this.userService.setIsLoading(false);
          if (!isvalid) {
            this.errorMessage = "Token invalide,... Verify your email and Try Again";
          }
        },
        (err) => {
          this.userService.setIsLoading(false);
          console.log(err);
          this.errorMessage = "Error !!"
        }
      )
    }
  }

  handleChangePassword(data : any){
    console.log(data.value.newPassword);
    const passwordReset = new PasswordResetDto(this.token,data.value.newPassword);
    this.userService.changePassword(passwordReset).subscribe(
      (data) => {
        this.userService.setIsLoading(false);
        // this.successMessage = "Password changed successfully, go To Login Page";
        this.router.navigate(['/accueil/login'], {
          queryParams: { message: 'Password changed successfully ... you can login now with new password ' }
         });
      },
      (err) => {
        this.userService.setIsLoading(false);
        console.log(err);
        this.errorMessage = "Error !!"
      }
    )
  }

}
