import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../model/user.model';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiURL: string = 'http://localhost:8087/api/authenticate' ;


  constructor(private http : HttpClient) {}

  authentifier( u: user):Observable<user>{
    return this.http.post<user>(this.apiURL, u);

    }
  }


