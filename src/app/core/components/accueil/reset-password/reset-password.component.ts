import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BaseComponent } from 'src/app/core/helpers/BaseComponent';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent extends BaseComponent {

  constructor(public userService : UserService) {
    super();
   }

  messageerror : string = "";
  messagesuccess : string = "";
  academicEmail: string = "";


  handleResetPassword(form : NgForm){
    this.userService.resetPassword(form.value.email).subscribe(
      (res : any) => {
        this.messagesuccess = res.message;
        this.messageerror = "";
        this.userService.setIsLoading(false);
      },
      (err : any) => {
        this.messageerror = err.error.message;
        this.messagesuccess = "";
        this.userService.setIsLoading(false);
      }
    )
  }

  // goback(){
  //   window.history.back();
  // }

}
