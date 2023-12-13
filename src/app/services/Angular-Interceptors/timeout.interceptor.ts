import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError, timeout } from 'rxjs';
import { NotificationService } from '../notification.service';

//Set a maximum timeout for HTTP requests
@Injectable()
export class TimeoutInterceptor implements HttpInterceptor {

  constructor(
    private _notificationService: NotificationService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const timeOutDuration = 10000;
    return next.handle(request)
      .pipe(timeout(timeOutDuration),
        catchError((err) => {
          if (err.name === 'TimeoutError') {
            this._notificationService.error(`Request timed out:${request.url}`);
            return throwError('Request time out');
          }
          return throwError(err);
        }
        ))
  };
}