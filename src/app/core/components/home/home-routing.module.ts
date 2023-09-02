import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationUserComponent } from './reservation-user/reservation-user.component';
import { ReserveTerrainFootComponent } from './reserve-terrain-foot/reserve-terrain-foot.component';
import { ReserveTerrainVolleyComponent } from './reserve-terrain-volley/reserve-terrain-volley.component';
import { ReservationAdminComponent } from './reservation-admin/reservation-admin.component';
import { ProfileComponent } from './profile/profile.component';
import { EditPorfileComponent } from './edit-porfile/edit-porfile.component';
import { MyReservationsComponent } from './my-reservations/my-reservations.component';
import { AuthGuard } from '../../guards/AuthGuard';

const routes: Routes = [
  { path: '', redirectTo: 'reserve', pathMatch: 'full' },
  {
    path: 'reserve', component: ReservationUserComponent, canActivate: [AuthGuard], title: "Home - Reservation menu"
   },
  { path: 'terrainfootbal', component: ReserveTerrainFootComponent, canActivate: [AuthGuard], title: "Home - Reservation footbal" },
  { path: 'terrainvolley', component: ReserveTerrainVolleyComponent, canActivate: [AuthGuard], title: "Home - Reservation volley" },
  { path: 'reserveradmin', component: ReservationAdminComponent, canActivate: [AuthGuard], title: "Home - admininstration" },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], title: "Home - Profile" },
  { path: 'editprofile', component: EditPorfileComponent, canActivate: [AuthGuard], title: "Home - Edit profile" },
  { path: 'myreservations', component: MyReservationsComponent, canActivate: [AuthGuard], title: "Home - My Reservations " },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
