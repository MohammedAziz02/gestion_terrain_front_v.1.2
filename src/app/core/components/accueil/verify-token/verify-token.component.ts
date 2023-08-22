import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-verify-token',
  templateUrl: './verify-token.component.html',
  styleUrls: ['./verify-token.component.css']
})
export class VerifyTokenComponent {

  token: string | null = null;
  errorMessage : string = "";

  constructor(private route: ActivatedRoute, public userService: UserService,private router : Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.token = params.get("token");
     
      if (this.token) {
        this.verifyToken(this.token);
      }
    
      
    })

 }
 

  handleClick() {
    console.log(this.token);
  }

  verifyToken(token: string) {
    this.userService.verifyToken(token).subscribe(
      
      (isvalid) => {
        this.userService.setIsLoading(false);
        if(isvalid){
            localStorage.setItem('tokenchangepassword',token); 
            this.router.navigate(['/accueil/update-password']);
        }else{
          this.errorMessage = "Token is not valid";
        }
      },
      (err) => {
        this.userService.setIsLoading(false);
        console.log(err);
      }
    )
  }

}


