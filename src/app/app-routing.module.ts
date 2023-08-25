import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './core/components/accueil/signup/signup.component';
import { LoginComponent } from './core/components/accueil/login/login.component';
import { PagenotfoundComponent } from './core/components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './core/components/home/home.component';
import { AccueilComponent } from './core/components/accueil/accueil.component';
import { ProfileComponent } from './core/components/profile/profile.component';
import { ReservationUserComponent } from './core/components/reservation-user/reservation-user.component';
import { AuthGuard } from './core/guards/AuthGuard';
import { EditPorfileComponent } from './core/components/edit-porfile/edit-porfile.component';
import { ReserveTerrainFootComponent } from './core/components/reserve-terrain-foot/reserve-terrain-foot.component';
import { ReserveTerrainVolleyComponent } from './core/components/reserve-terrain-volley/reserve-terrain-volley.component';
import { ReservationAdminComponent } from './core/components/reservation-admin/reservation-admin.component';
import { ResetPasswordComponent } from './core/components/accueil/reset-password/reset-password.component';
import { VerifyTokenComponent } from './core/components/accueil/verify-token/verify-token.component';
import { UpdatePasswordComponent } from './core/components/accueil/update-password/update-password.component';
// import { ResetPasswordComponent } from './core/components/accueil/reset-password/reset-password.component';
import { TokenGuard } from './core/guards/TokenGuard';
import { MatchOfToday } from './core/models/matchOfToday';
import { MatchTodayComponent } from './core/components/accueil/match-today/match-today.component';

const routes: Routes = [
  // { path: 'signup', component: SignupComponent, title: "Accueil - Signup " },
  // { path: 'login', component: LoginComponent, title: "Accueil - Loginn " },
  // { path: 'reset-password', component: ResetPasswordComponent, title: "Accueil - Reset password " },
  // { path: 'verify-token/:token', component: VerifyTokenComponent, title: "Accueil - Verify token  " },
  // {path: 'update-password', component: UpdatePasswordComponent, title: "Accueil - Update password "},
  // { path: 'match-today', component: MatchTodayComponent, title: "Home - match of today "},
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent, title: "Accueil - Accueil " ,
    children: [
      { path: '', redirectTo: 'match-today', pathMatch: 'full' },
      { path: 'login', component: LoginComponent, title: "Accueil - Login " },
      { path: 'signup', component: SignupComponent, title: "Accueil - Signup " },
      { path: 'reset-password', component: ResetPasswordComponent, title: "Accueil - Reset password " },
      { path: 'verify-token/:token', component: VerifyTokenComponent, title: "Accueil - Verify token  " },
      {path: 'update-password', component: UpdatePasswordComponent, title: "Accueil - Update password "},
      { path: 'match-today', component: MatchTodayComponent, title: "Home - match of today "}
    ]},
  {
    path: "home", component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'reserve', pathMatch: 'full' },
      {
        path: 'reserve', component: ReservationUserComponent, canActivate: [AuthGuard], title: "Home - Reservation menu"
        // children: [
        // { path: '', redirectTo: 'terrainfootbal', pathMatch: 'full' },
        // { path: 'terrainfootbal', component: ReserveTerrainFootComponent, canActivate: [AuthGuard] },
        // ]
      },
      { path: 'terrainfootbal', component: ReserveTerrainFootComponent, canActivate: [AuthGuard], title: "Home - Reservation footbal" },
      { path: 'terrainvolley', component: ReserveTerrainVolleyComponent, canActivate: [AuthGuard], title: "Home - Reservation volley" },
      { path: 'reserveradmin', component: ReservationAdminComponent, canActivate: [AuthGuard], title: "Home - admininstration" },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], title: "Home - Profile" },
      { path: 'editprofile', component: EditPorfileComponent, canActivate: [AuthGuard], title: "Home - Edit profile" },
    ]
  },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
