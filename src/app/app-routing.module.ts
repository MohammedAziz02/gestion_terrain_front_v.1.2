import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './core/components/accueil/signup/signup.component';
import { LoginComponent } from './core/components/accueil/login/login.component';
import { PagenotfoundComponent } from './core/components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './core/components/home/home.component';
import { AccueilComponent } from './core/components/accueil/accueil.component';
import { ProfileComponent } from './core/components/home/profile/profile.component';
import { ReservationUserComponent } from './core/components/home/reservation-user/reservation-user.component';
import { AuthGuard } from './core/guards/AuthGuard';
import { EditPorfileComponent } from './core/components/home/edit-porfile/edit-porfile.component';
import { ReserveTerrainFootComponent } from './core/components/home/reserve-terrain-foot/reserve-terrain-foot.component';
import { ReserveTerrainVolleyComponent } from './core/components/home/reserve-terrain-volley/reserve-terrain-volley.component';
import { ReservationAdminComponent } from './core/components/home/reservation-admin/reservation-admin.component';
import { ResetPasswordComponent } from './core/components/accueil/reset-password/reset-password.component';
import { VerifyTokenComponent } from './core/components/accueil/verify-token/verify-token.component';
import { UpdatePasswordComponent } from './core/components/accueil/update-password/update-password.component';
import { MatchTodayComponent } from './core/components/accueil/match-today/match-today.component';
import { MyReservationsComponent } from './core/components/home/my-reservations/my-reservations.component';

const routes: Routes = [
  // { path: 'signup', component: SignupComponent, title: "Accueil - Signup " },
  // { path: 'login', component: LoginComponent, title: "Accueil - Loginn " },
  // { path: 'reset-password', component: ResetPasswordComponent, title: "Accueil - Reset password " },
  // { path: 'verify-token/:token', component: VerifyTokenComponent, title: "Accueil - Verify token  " },
  // {path: 'update-password', component: UpdatePasswordComponent, title: "Accueil - Update password "},
  // { path: 'match-today', component: MatchTodayComponent, title: "Home - match of today "},
  { path: '', redirectTo: '/accueil/match-today', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent, title: "Accueil - Accueil " ,
     loadChildren: () => import('./core/components/accueil/accueil.module').then(m => m.AccueilModule)   
},
  {
    path: "home", component: HomeComponent, canActivate: [AuthGuard],
    loadChildren: () => import('./core/components/home/home.module').then(m => m.HomeModule)
  },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
