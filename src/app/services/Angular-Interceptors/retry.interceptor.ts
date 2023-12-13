import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, retry } from 'rxjs';

//Retry Failed HTTP requests
@Injectable()
export class RetryInterceptor implements HttpInterceptor {
  private maxRetires: number = 3;

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(retry(this.maxRetires));
  }
}