import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

//Add custom headers to outgoing HTTP requests.
@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headers = new HttpHeaders({
      'Content-Type': 'applications/json',
      'X-API-Key': 'api-key',
    });
    const headersRequest = request.clone({ headers });
    return next.handle(headersRequest);
  }
}
