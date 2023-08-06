import { Component } from '@angular/core';
import { Signup } from '../../models/Signup';
import { AuthserviceService } from '../../services/authservice.service';
import { Router } from '@angular/router';
import { MessagesharedsinguploginService } from '../../shared/messagesharedsinguplogin.service';
import { NgControl, NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signuprequest: Signup = new Signup("", "", "", "", "", "", "", "", "", "");
  messageerror: string = "";
  confirmPassword: string = "";
  isValidatedimg: boolean = false;
  selectedImage: any;
  imgSrc : string = "";
  
  constructor(protected authService: AuthserviceService, private router: Router, private messagesharedsinguploginService: MessagesharedsinguploginService) {
    console.log("signup is rendered constructor");
  }

  ngOnInit(): void {
    console.log("signup is rendered ngOnInit");
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    const x= {...form.value, picture: this.selectedImage};
    console.log(x);

    // this.authService.register(form.value).subscribe(
    //   (response) => {
    //     this.authService.setIsLoading(false);
    //     console.log(response);
    //     this.messagesharedsinguploginService.setMessage("You have been successfully registered. Please login to continue.");
    //     this.router.navigate(['accueil/login']);
    //   },
    //   (error) => {
    //     this.authService.setIsLoading(false);
    //     console.log(error);
    //     this.messageerror = error.error.message;
    //   }
    // );
  }

  

  

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const maxSize = 5 * 1024 * 1024; // 3MB
    if (file  && file.size <= maxSize) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imgSrc = e.target.result;
      };
      reader.readAsDataURL(file);
      this.selectedImage = file;
      this.isValidatedimg = true;
    } else {
      this.isValidatedimg = false;
      this.imgSrc = "";
      this.selectedImage = null;
    }
  }


}
