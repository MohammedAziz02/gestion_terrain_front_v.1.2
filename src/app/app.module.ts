import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './core/components/accueil/signup/signup.component';
import { LoginComponent } from './core/components/accueil/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './core/components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './core/components/home/home.component';
import { AccueilComponent } from './core/components/accueil/accueil.component';
import { ProfileComponent } from './core/components/home/profile/profile.component';
import { ReservationAdminComponent } from './core/components/home/reservation-admin/reservation-admin.component';
import { ReservationUserComponent } from './core/components/home/reservation-user/reservation-user.component';
import { AuthGuard } from './core/guards/AuthGuard';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { EditPorfileComponent } from './core/components/home/edit-porfile/edit-porfile.component';
import { AuthInterceptor, authInterceptorProviders } from './core/helpers/auth.interceptor';
import { ReserveTerrainFootComponent } from './core/components/home/reserve-terrain-foot/reserve-terrain-foot.component';
import { ReserveTerrainVolleyComponent } from './core/components/home/reserve-terrain-volley/reserve-terrain-volley.component';
import { ReservationService } from './core/services/reservation.service';
import { TokenStorageService } from './core/services/token-storage.service';
import { GenericReservationComponent } from './core/components/home/generic-reservation/generic-reservation.component';
import { MatchTodayComponent } from './core/components/accueil/match-today/match-today.component';
import { ResetPasswordComponent } from './core/components/accueil/reset-password/reset-password.component';
import { VerifyTokenComponent } from './core/components/accueil/verify-token/verify-token.component';
import { UpdatePasswordComponent } from './core/components/accueil/update-password/update-password.component';
import { DataTablesModule } from "angular-datatables";
import { MyReservationsComponent } from './core/components/home/my-reservations/my-reservations.component';
import { SharedModule } from './shared.module';
import { HomeModule } from './core/components/home/home.module';
import { AccueilModule } from './core/components/accueil/accueil.module';

@NgModule({
  declarations: [
    AppComponent,
   
    PagenotfoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccueilModule,
    HomeModule
  ],
  providers: [AuthGuard,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
