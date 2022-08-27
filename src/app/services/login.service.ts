import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../model/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'}
   )
  };

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiURL: string = 'http://localhost:8087/api/authenticate' ;
  static getToken: string;

  constructor(private http : HttpClient, private u : user) {}

  authentifier( u: user):Observable<user>{
    return this.http.post<user>(this.apiURL, u);

    }

   //getToken() :string{
   // return JSON.parse(localStorage.getItem('token') || '{}');
   // return this.u.usertoken;
   //}

   //setToken(token:string):  void {
    //return  localStorage.setItem('token', this.u.usertoken );
//}

   //getToken():  string {
   // return  localStorage.getItem('token') || '{}';
//}
  }




// , {responseType : 'text' as 'json'}
