import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from '../accueil/login/login.component';
import { SharedModule } from 'src/app/shared.module';
import { MyReservationsComponent } from './my-reservations/my-reservations.component';
import { ProfileComponent } from './profile/profile.component';
import { ReservationAdminComponent } from './reservation-admin/reservation-admin.component';
import { ReservationUserComponent } from './reservation-user/reservation-user.component';
import { EditPorfileComponent } from './edit-porfile/edit-porfile.component';
import { ReserveTerrainFootComponent } from './reserve-terrain-foot/reserve-terrain-foot.component';
import { ReserveTerrainVolleyComponent } from './reserve-terrain-volley/reserve-terrain-volley.component';
import { GenericReservationComponent } from './generic-reservation/generic-reservation.component';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MyReservationsComponent,
    ProfileComponent,
    ReservationAdminComponent,
    ReservationUserComponent,
    EditPorfileComponent,
    ReserveTerrainFootComponent,
    ReserveTerrainVolleyComponent,
    GenericReservationComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
  
  ]
})
export class HomeModule { }
