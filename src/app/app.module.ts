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
import { ReservationAdminComponent } from './core/components/reservation-admin/reservation-admin.component';
import { ReservationUserComponent } from './core/components/reservation-user/reservation-user.component';
import { AuthGuard } from './core/guards/AuthGuard';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { EditPorfileComponent } from './core/components/edit-porfile/edit-porfile.component';
import { AuthInterceptor, authInterceptorProviders } from './core/helpers/auth.interceptor';
import { ReserveTerrainFootComponent } from './core/components/reserve-terrain-foot/reserve-terrain-foot.component';
import { ReserveTerrainVolleyComponent } from './core/components/reserve-terrain-volley/reserve-terrain-volley.component';
import { ReservationService } from './core/services/reservation.service';
import { TokenStorageService } from './core/services/token-storage.service';
import { GenericReservationComponent } from './core/components/generic-reservation/generic-reservation.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    PagenotfoundComponent,
    HomeComponent,
    AccueilComponent,
    ProfileComponent,
    ReservationAdminComponent,
    ReservationUserComponent,
    EditPorfileComponent,
    ReserveTerrainFootComponent,
    ReserveTerrainVolleyComponent,
    GenericReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgbDropdownModule


  ],
  providers: [AuthGuard,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
