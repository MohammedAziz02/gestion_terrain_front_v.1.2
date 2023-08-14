import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './core/components/signup/signup.component';
import { LoginComponent } from './core/components/login/login.component';
import { PagenotfoundComponent } from './core/components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './core/components/home/home.component';
import { AccueilComponent } from './core/components/accueil/accueil.component';
import { ProfileComponent } from './core/components/profile/profile.component';
import { ReservationUserComponent } from './core/components/reservation-user/reservation-user.component';
import { ReservationAdminComponent } from './core/components/reservation-admin/reservation-admin.component';
import { AuthGuard } from './core/guards/AuthGuard';
import { EditPorfileComponent } from './core/components/edit-porfile/edit-porfile.component';
import { ReserveTerrainFootComponent } from './core/components/reserve-terrain-foot/reserve-terrain-foot.component';
import { ReserveTerrainVolleyComponent } from './core/components/reserve-terrain-volley/reserve-terrain-volley.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil/signup', pathMatch: 'full' },
  {
    path: 'accueil', component: AccueilComponent,
    children: [
      { path: '', redirectTo: 'signup', pathMatch: 'full' },
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent },
    ]
  },
  {
    path: "home", component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'reserve', pathMatch: 'full' },
      {
        path: 'reserve', component: ReservationUserComponent, canActivate: [AuthGuard],
        // children: [
          // { path: '', redirectTo: 'terrainfootbal', pathMatch: 'full' },
          // { path: 'terrainfootbal', component: ReserveTerrainFootComponent, canActivate: [AuthGuard] },
        // ]
      },
      { path: 'terrainfootbal', component: ReserveTerrainFootComponent, canActivate: [AuthGuard] },
      { path: 'terrainvolley', component: ReserveTerrainVolleyComponent, canActivate: [AuthGuard] },
      { path: 'reserveradmin', component: ReservationAdminComponent, canActivate: [AuthGuard] },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
      { path: 'editprofile', component: EditPorfileComponent, canActivate: [AuthGuard] },
    ]
  },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
