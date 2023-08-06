import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './core/components/signup/signup.component';
import { LoginComponent } from './core/components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './core/components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './core/components/home/home.component';
import { AccueilComponent } from './core/components/accueil/accueil.component';
import { ProfileComponent } from './core/components/profile/profile.component';
import { ReservationterrainAdminComponent } from './core/components/reservationterrain-admin/reservationterrain-admin.component';
import { ReservationterrainUserComponent } from './core/components/reservationterrain-user/reservationterrain-user.component';
import { AuthGuard } from './core/guards/AuthGuard';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { EditPorfileComponent } from './core/components/edit-porfile/edit-porfile.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    PagenotfoundComponent,
    HomeComponent,
    AccueilComponent,
    ProfileComponent,
    ReservationterrainAdminComponent,
    ReservationterrainUserComponent,
    EditPorfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgbDropdownModule

  
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
