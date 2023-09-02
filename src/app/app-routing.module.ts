import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './core/components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './core/components/home/home.component';
import { AccueilComponent } from './core/components/accueil/accueil.component';
import { AuthGuard } from './core/guards/AuthGuard';


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
