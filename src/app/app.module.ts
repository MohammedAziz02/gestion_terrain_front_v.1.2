import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './core/components/accueil/signup/signup.component';
import { PagenotfoundComponent } from './core/components/pagenotfound/pagenotfound.component';
import { AuthGuard } from './core/guards/AuthGuard';
import { authInterceptorProviders } from './core/helpers/auth.interceptor';
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
