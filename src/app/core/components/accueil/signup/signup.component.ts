import { Component } from '@angular/core';
import { Signup } from '../../../models/Signup';
import { AuthserviceService } from '../../../services/authservice.service';
import { Router } from '@angular/router';
import { MessagesharedsinguploginService } from '../../../shared/messagesharedsinguplogin.service';
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
    let formData = new FormData();
    formData.append('firstName', form.value.firstname);
    formData.append('lastName', form.value.lastname);
    formData.append('normalEmail', form.value.normalemail);
    formData.append("academicEmail", form.value.academicemail);
    formData.append('password', form.value.password);
    formData.append("mobilePhone", form.value.phonenumber);
    formData.append("grade", form.value.grade);
    formData.append("picture", this.selectedImage);
    formData.append("role", form.value.role);

    console.log("formdata",this.selectedImage);



    this.authService.register(formData).subscribe(
      (response) => {
        this.authService.setIsLoading(false);
        console.log(response);
        this.messagesharedsinguploginService.setMessage("You have been successfully registered. Please login to continue.");
        this.router.navigate(['accueil/login']);
      },
      (error) => {
        this.authService.setIsLoading(false);
        console.log(error);
        this.messageerror = error.error.message;
      }
    );
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
