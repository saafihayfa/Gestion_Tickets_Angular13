import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpHeaders
} from '@angular/common/http';
import {map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(private auth: LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authToken = localStorage.getItem('token');
    const clonedRequest = request.clone({
         headers: new HttpHeaders({
           "Authorization": 'Bearer' +''+ authToken,
           "Content-Type": "application/json"
         })
       });


    return next.handle(clonedRequest);
}}
