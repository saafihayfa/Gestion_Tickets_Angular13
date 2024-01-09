import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { AllticketsComponent } from './alltickets/alltickets.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { GetTicketComponent } from './get-ticket/get-ticket.component';
import { SentTicketComponent } from './sent-ticket/sent-ticket.component';
import { OtherTicketComponent } from './other-ticket/other-ticket.component';
import { NotaffecTicketComponent } from './notaffec-ticket/notaffec-ticket.component';
import { ResolvedTicketComponent } from './resolved-ticket/resolved-ticket.component';
import { PendingTicketComponent } from './pending-ticket/pending-ticket.component';
import { ProgressTicketComponent } from './progress-ticket/progress-ticket.component';
import { TestTicketComponent } from './test-ticket/test-ticket.component';


const routes: Routes = [
  { path: "navbar", component: NavbarComponent },
  {path : "navbar1", component: Navbar1Component},
  { path: "login", component: LoginComponent},
  {path: "accueil", component : AccueilComponent},
  {path: "add-ticket", component : AddTicketComponent},
  {path : "alltickets" , component: AllticketsComponent},
  {path : "update-ticket/:id", component: UpdateTicketComponent},
  {path: "get-ticket", component : GetTicketComponent},
  {path: "sent-ticket",component : SentTicketComponent},
  {path: "other-ticket", component : OtherTicketComponent},
  {path: "notaffec-ticket", component : NotaffecTicketComponent},
  {path: "resolved-ticket", component : ResolvedTicketComponent},
  {path: "pending-ticket" , component : PendingTicketComponent},
  {path: "progress-ticket", component : ProgressTicketComponent},
  {path: "test-ticket", component : TestTicketComponent},
  {path: "", redirectTo: "login", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
