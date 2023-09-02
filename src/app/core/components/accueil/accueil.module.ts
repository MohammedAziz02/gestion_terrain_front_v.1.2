import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilRoutingModule } from './accueil-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AccueilComponent } from './accueil.component';
import { MatchTodayComponent } from './match-today/match-today.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyTokenComponent } from './verify-token/verify-token.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { SharedModule } from 'src/app/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AccueilComponent,
    MatchTodayComponent,
    ResetPasswordComponent,
    VerifyTokenComponent,
    UpdatePasswordComponent,
  ],
  imports: [
    CommonModule,
    AccueilRoutingModule,
    SharedModule,
   
  ]
})
export class AccueilModule { }
