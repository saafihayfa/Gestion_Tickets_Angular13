import { Injectable } from '@angular/core';
import { ticket } from '../model/ticket.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from '../model/user.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class AllticketsService {

  constructor(private http : HttpClient) { }

  listerTicket(): Observable<ticket[]>{
     const url ='http://localhost:8087/api/hdkticket'
     return this.http.get<ticket[]>(url);
    }

  ajouterTicket( t: ticket):Observable<ticket>{
      const url = 'http://localhost:8087/api/addhdkticket'
      return this.http.post<ticket>(url, t, httpOptions);
      }

  supprimerTicket(idTicket : number){
        const url =  `http://localhost:8087/api/deletehdkticket/${idTicket}`;
        return this.http.delete( url, httpOptions);
        }

  consulterTicket (idTicket: number):Observable<ticket>{
      const url =  `http://localhost:8087/api/hdkticket/${idTicket}`;
      return this.http.get<ticket>(url);
        }


  modifierTicket(t : ticket) : Observable<ticket>{
      const url = `http://localhost:8087/api/updatehdkticket/${t.idTicket}` ;
      return this.http.put<ticket>(url,t, httpOptions);
        }

  listerId(): Observable<user[]>{
      const url ='http://localhost:8087/api/getAllId'
      return this.http.get<user[]>(url);
         }

}



