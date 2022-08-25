import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import {map, Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const startTime = (new Date()).getTime();
    return next.handle(request).pipe(map(event => {
    if (event instanceof HttpResponse) {
        const endTime = (new Date).getTime();
        const responseTime = endTime - startTime;
        console.log(`${event.url} succeed in ${responseTime} ms`)
    }
    return event;
}));
}}
