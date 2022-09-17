import { Injectable } from '@angular/core';
import { ticket } from '../model/ticket.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private http : HttpClient) { }

  Ticketsrecus(): Observable<ticket[]>{
    const url ='http://localhost:8087/api/receivedticket'
    return this.http.get<ticket[]>(url);
   }

   Ticketsenvoyes(): Observable<ticket[]>{
    const url ='http://localhost:8087/api/sentticket'
    return this.http.get<ticket[]>(url);
   }

   Autrestickets(): Observable<ticket[]>{
    const url ='http://localhost:8087/api/othersticket'
    return this.http.get<ticket[]>(url);
   }

   Tickets_nonaffectes(): Observable<ticket[]>{
    const url ='http://localhost:8087/api/notaffec_ticket'
    return this.http.get<ticket[]>(url);
   }

   Ticketsrésolus(){
    const url ='http://localhost:8087/api/resolved_ticket'
    return this.http.get<ticket[]>(url);

   }

   supprimerTicket(idTicket : number){
    const url =  `http://localhost:8087/api/deletehdkticket/${idTicket}`;
    return this.http.delete( url, httpOptions);
    }




}
