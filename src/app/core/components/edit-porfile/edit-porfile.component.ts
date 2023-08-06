import { Component } from '@angular/core';
import { UserDto } from '../../models/UserDto';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-porfile',
  templateUrl: './edit-porfile.component.html',
  styleUrls: ['./edit-porfile.component.css']
})
export class EditPorfileComponent {
  userprofile: UserDto;
  oldPassword: string;
  newPassword: string;
  messagepasschangedsuccess: string;
  messagepasschangederror: string;
  loadingUpdateProfile : Boolean = false;
  loadingUpdatePassword : Boolean = false;


  constructor(protected profileService: ProfileService, private tokenStorageService: TokenStorageService, private router: Router) {
    console.log("edit profile is rendered constructor");
  }


  ngOnInit() {
    console.log("edit profile is rendered ngOnInit");
    console.log(this.tokenStorageService.getUser());
    const loggeduser = this.tokenStorageService.getUser();
    if (loggeduser) {
      this.profileService.getProfile(this.tokenStorageService.getUser().email).subscribe(
        (data: any) => {
          this.userprofile = new UserDto(data);
          console.log("edit profile ----> ", this.userprofile);
          //première log
          console.log("first", this.userprofile);
          this.profileService.setIsLoading(false);
        },
        (error: any) => {
          console.log(error)
          this.profileService.setIsLoading(false);
        });
    } else {
      this.router.navigate(['/accueil/login']);
    }
  }


  onsubmit(form: NgForm) {
  
    this.loadingUpdateProfile = true;
    console.log("form values ", form.value);
    this.profileService.updateProfile(form.value).subscribe(
      (data: any) => {
        this.profileService.isLoading = false;
        this.loadingUpdateProfile = false;
        this.userprofile = new UserDto(data);
        console.log("second", this.userprofile);
        this.router.navigate(['/home/profile']);
      },
      (error: any) => { 
        this.profileService.isLoading = false;
        this.loadingUpdateProfile = false;
        console.log(error);
       }
    )
   
  }


  onchangePassword() {
   this.loadingUpdatePassword = true;
    let data = {
      oldPassword: this.oldPassword,
      newPassword: this.newPassword,
      academicEmail: this.tokenStorageService.getUser().email
    }
    this.messagepasschangedsuccess = "";
    this.messagepasschangederror = "";
    this.profileService.changePassword(data).subscribe(
      (data: any) => {
        this.profileService.isLoading = false;
        this.loadingUpdatePassword = false;
        this.messagepasschangedsuccess = data.message;
      },
      (error: any) => {
        console.log(error);
        this.profileService.isLoading = false;
        this.loadingUpdatePassword = false;
        this.messagepasschangederror = error.message;
      }
    )
  
  }


}
