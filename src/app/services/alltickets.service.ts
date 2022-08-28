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
export class AllticketsService {


  apiURL: string = 'http://localhost:8087/api/hdkticket' ;

  constructor(private http : HttpClient) { }

  listerTicket(): Observable<ticket[]>{

  return this.http.get<ticket[]>(this.apiURL);
    }


  ajouterTicket( t: ticket):Observable<ticket>{
      const url = 'http://localhost:8087/api/addhdkticket'
      return this.http.post<ticket>(url, t, httpOptions);
      }

  supprimerTicket(idTicket : number){
        const url =  `http://localhost:8087/api/deletehdkticket/${idTicket}`;
        return this.http.delete( url, httpOptions);
        }


}



