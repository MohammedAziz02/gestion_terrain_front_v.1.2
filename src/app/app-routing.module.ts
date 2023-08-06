import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './core/components/signup/signup.component';
import { LoginComponent } from './core/components/login/login.component';
import { PagenotfoundComponent } from './core/components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './core/components/home/home.component';
import { AccueilComponent } from './core/components/accueil/accueil.component';
import { ProfileComponent } from './core/components/profile/profile.component';
import { ReservationterrainUserComponent } from './core/components/reservationterrain-user/reservationterrain-user.component';
import { ReservationterrainAdminComponent } from './core/components/reservationterrain-admin/reservationterrain-admin.component';
import { AuthGuard } from './core/guards/AuthGuard';
import { EditPorfileComponent } from './core/components/edit-porfile/edit-porfile.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil/signup', pathMatch: 'full' },
  { path: 'accueil',component: AccueilComponent,
   children: [
    { path: '', redirectTo: 'signup', pathMatch: 'full' }, 
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent }, 
  ] },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard],
  children: [
    { path: '', redirectTo: 'reserveruser', pathMatch: 'full' },
    { path: 'reserveruser', component: ReservationterrainUserComponent },
    { path: 'reserveradmin', component: ReservationterrainAdminComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'editprofile', component: EditPorfileComponent, canActivate: [AuthGuard] },
  ]},
  { path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
