import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { AllticketsComponent } from './alltickets/alltickets.component';
import { HeadersInterceptor } from './headers.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AccueilComponent,
    AddTicketComponent,
    AllticketsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
