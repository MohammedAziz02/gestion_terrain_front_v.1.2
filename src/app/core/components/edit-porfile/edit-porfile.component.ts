import { Component } from '@angular/core';
import { UserDto } from '../../models/UserDto';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';
import { BaseComponent } from '../../helpers/BaseComponent';

@Component({
  selector: 'app-edit-porfile',
  templateUrl: './edit-porfile.component.html',
  styleUrls: ['./edit-porfile.component.css']
})
export class EditPorfileComponent  extends BaseComponent {
  userprofile: UserDto;
  oldPassword: string;
  newPassword: string;
  // for message of picturechanged
  messagepicchangedsuccess: string;
  messagepicchangederror: string;
  // for message of password
  messagepasschangedsuccess: string;
  messagepasschangederror: string;
  // for loading logic
  loadingUpdateProfile : Boolean = false;
  loadingUpdatePassword : Boolean = false;
  pictureupdate : Boolean = false;
 


  constructor(protected profileService: ProfileService, private tokenStorageService: TokenStorageService, private router: Router) {
    console.log("edit profile is rendered constructor");
    super();
  }


  ngOnInit() {
    this.messagepasschangederror="";
    this.messagepasschangedsuccess="";
    this.messagepicchangedsuccess="";

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
        console.log("data teeest", data);
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


  openFileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  // Fonction appelée lorsqu'une image est sélectionnée via le sélecteur de fichier
  onImageSelected(event: any) {
    this.messagepicchangedsuccess = "";
    this.pictureupdate = true;
    const file = event.target.files[0];
    console.log("file------------>", file);
    if(file.size > 3000000){
      this.messagepicchangederror = "File size must be less than 3MB";
      this.messagepasschangedsuccess="";
      this.pictureupdate = false;
      return;
    }
    const formData = new FormData();
    formData.append('picture', file);
    
    this.profileService.changePicture(formData).subscribe(
      (data: any) => {
        console.log("data from updating picture", data);
        this.profileService.isLoading = false;
        this.pictureupdate = false;
        this.userprofile.picture = data.message;
        this.messagepicchangedsuccess = "Picture changed successfully";
        this.messagepicchangederror = "";
        // window.location.reload();
        // this.router.navigate(['/home/profile']);
      },
      (error: any) => {
        console.log(error);
        this.pictureupdate = false;
        this.profileService.isLoading = false;
      }
    )

  
  }


}
