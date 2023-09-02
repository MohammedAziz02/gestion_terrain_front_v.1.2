import { Component } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { TokenStorageService } from '../../../services/token-storage.service';
import { Router } from '@angular/router';
import { UserDto } from '../../../models/UserDto';
import { BaseComponent } from '../../../helpers/BaseComponent';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  extends BaseComponent {
  userprofile: UserDto;

  constructor(protected profileService: ProfileService, private tokenStorageService: TokenStorageService, private router: Router) {
    console.log("profile is rendered constructor");
    super();
  }

  ngOnInit() {
    console.log("profile is rendered ngOnInit");
    console.log(this.tokenStorageService.getUser());
    const loggeduser = this.tokenStorageService.getUser();
    if (loggeduser) {
      this.profileService.getProfile(this.tokenStorageService.getUser().email).subscribe(
        (data: any) => {
          this.userprofile = new UserDto(data);
          this.profileService.setIsLoading(false);
        },
        (error: any) => {
          this.profileService.setIsLoading(false);
          console.log(error)
        });
    } else {
      this.router.navigate(['/accueil/login']);
    }
  }



}
