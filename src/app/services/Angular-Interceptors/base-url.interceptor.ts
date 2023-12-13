import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

//Prepend a base URL to all HTTP requests
@Injectable()
export class BaseURLInterceptor implements HttpInterceptor {
  private baseURL = 'http://api.com';
  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const apiReq = request.clone({
      url: `${this.baseURL}${request.url}`,
    })
    return next.handle(apiReq);
  }
}