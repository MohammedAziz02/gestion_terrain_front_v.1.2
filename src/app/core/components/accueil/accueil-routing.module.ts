import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyTokenComponent } from './verify-token/verify-token.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { MatchTodayComponent } from './match-today/match-today.component';

const routes: Routes = [

  { path: '', redirectTo: '/accueil/match-today', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, title: "Accueil - Login " },
  { path: 'signup', component: SignupComponent, title: "Accueil - Signup " },
  { path: 'reset-password', component: ResetPasswordComponent, title: "Accueil - Reset password " },
  { path: 'verify-token/:token', component: VerifyTokenComponent, title: "Accueil - Verify token  " },
  {path: 'update-password', component: UpdatePasswordComponent, title: "Accueil - Update password "},
  { path: 'match-today', component: MatchTodayComponent, title: "Home - match of today "}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccueilRoutingModule { }
