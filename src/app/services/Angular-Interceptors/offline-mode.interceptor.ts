import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { NotificationService } from '../notification.service';

@Injectable()
export class OfflineModeInterceptor implements HttpInterceptor {

  constructor(
    private _notificationService: NotificationService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (navigator.onLine) {
      this._notificationService.warn(`Device is offline. Request not sent: ${request.url}`);
      return throwError(new HttpErrorResponse({ status: 0, statusText: 'Offline' }));
    }
    return next.handle(request);
  }
}
