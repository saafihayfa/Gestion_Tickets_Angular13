import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authToken = localStorage.getItem('token');

    // Vérifiez si la requête concerne l'API d'authentification
    if (request.url.endsWith('/api/authenticate')) {
      // Ne pas inclure le header "Authorization" pour l'API d'authentification
      const clonedRequest = request.clone({
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      });

      return next.handle(clonedRequest);
    }

    // Pour les autres requêtes, inclure le header "Authorization"
    const clonedRequest = request.clone({
      headers: new HttpHeaders({
        "Authorization": `Bearer ${authToken}`,
        "Content-Type": "application/json"
      })
    });

    return next.handle(clonedRequest);
  }
}
