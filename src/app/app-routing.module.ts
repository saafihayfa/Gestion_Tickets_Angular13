import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { AllticketsComponent } from './alltickets/alltickets.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
const routes: Routes = [
  { path: "navbar", component: NavbarComponent },
  { path: "login", component: LoginComponent},
  {path: "accueil", component : AccueilComponent},
  {path: "add-ticket", component : AddTicketComponent},
  {path : "alltickets" , component: AllticketsComponent},
  {path : "update-ticket", component: UpdateTicketComponent},
  {path: "", redirectTo: "login", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
