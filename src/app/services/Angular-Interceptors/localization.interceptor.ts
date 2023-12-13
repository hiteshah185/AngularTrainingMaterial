import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

//Used to automatically include the user’s preferred language or locale in HTTP requests
@Injectable()
export class LocalizationInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const userLocale = 'GET_LANGUAGE_PREFERENCE_FROM_USER_LOCAL_SERVER'
    const localizedRequest = request.clone({
      setHeaders: {
        'Accept-Language': userLocale,
      },
    });
    return next.handle(localizedRequest);
  }
}
