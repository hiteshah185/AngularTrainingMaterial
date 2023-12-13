import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { NotificationService } from '../notification.service';

//Used to centralize error handling for HTTP requests
@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(
    private _notificationService: NotificationService) { }
  /**
   For centralized HTTP error management,
    an error interceptor is your key. 
    It intercepts errors, logs them for analysis,
     and triggers actions like error message display,
      significantly improving your code's resilience.
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        this._notificationService.error(`HTTP Error:, ${error}`);
        return throwError(error);
      })
    );
  }
}

// return next.handle(request).pipe(
//   tap({
//     next: (event) => {
//       if (event instanceof HttpResponse) {
//         if(event.status == 401) {
//           alert('Unauthorized access!')
//         }
//       }
//       return event;
//     },
//     error: (error) => {
//       if(error.status === 401) {
//         alert('Unauthorized access!')
//       }
//       else if(error.status === 404) {
//         alert('Page Not Found!')
//       }
//     }
//   }));