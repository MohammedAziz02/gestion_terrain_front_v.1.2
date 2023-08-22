import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

@Injectable({
    providedIn: 'root'
})
export class TokenGuard implements CanActivate {

    constructor(private router: Router, private userService : UserService) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {

          console.log("TokenGuard ..............");
    
            const token = localStorage.getItem('tokenchangepassword');
            if(!token){
                this.router.navigate(['/accueil/update-password'], {
                    queryParams: { error: 'Token invalide' }
                  });
                  return false;
            }else{
                this.userService.verifyToken(token).subscribe(
                    (isvalid) => {
                      this.userService.setIsLoading(false);
                      if(isvalid){
                         return true;
                      }else{
                             this.router.navigate(['/accueil/update-password'], {
                            queryParams: { error: 'Token invalide' }
                          });
                          return false;
                      }
                    },
                    (err) => {
                      this.userService.setIsLoading(false);
                      console.log(err);
                      this.router.navigate(['/accueil/update-password'], {
                        queryParams: { error: 'Token invalide' }
                      });
                      return false;
                    }
                  )
            }

            console.log("khlas wssl l hna");
            return false;

            
      }
}
