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
import { HeadersInterceptor } from './services/headers.interceptor';
import { AllticketsService } from './services/alltickets.service';
import { LoginService } from './services/login.service';
import { user } from './model/user.model';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { ActivatedRoute } from '@angular/router';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { Navbar1Component } from './navbar1/navbar1.component';
import { GetTicketComponent } from './get-ticket/get-ticket.component';
import { SentTicketComponent } from './sent-ticket/sent-ticket.component';
import { OtherTicketComponent } from './other-ticket/other-ticket.component';
import { NotaffecTicketComponent } from './notaffec-ticket/notaffec-ticket.component';
import { ResolvedTicketComponent } from './resolved-ticket/resolved-ticket.component';
import { PendingTicketComponent } from './pending-ticket/pending-ticket.component';
import { ProgressTicketComponent } from './progress-ticket/progress-ticket.component';
import { TestTicketComponent } from './test-ticket/test-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AccueilComponent,
    AddTicketComponent,
    AllticketsComponent,
    UpdateTicketComponent,
    Navbar1Component,
    GetTicketComponent,
    SentTicketComponent,
    OtherTicketComponent,
    NotaffecTicketComponent,
    ResolvedTicketComponent,
    PendingTicketComponent,
    ProgressTicketComponent,
    TestTicketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [
    AllticketsService,
    LoginService,
    user,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
