import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//Used to add authentication tokens to outgoing requests and handle authentication-related errors.
@Injectable()
export class AuthInterceptorService implements HttpInterceptor {


  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = 'auth-token';
    const authRequest = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`),
    });
    return next.handle(authRequest);
  }
}


//compression interceptor can be used to automatically request compressed content (e.g., gzip) 
//CSP interceptor can be used to automatically add Content Security Policy headers 
// const compressedRequest = request.clone({
//   setHeaders: {
//     'Accept-Encoding': 'gzip, deflate',
//      'Content-Security-Policy': cspHeader,
//   },
// });
// return next.handle(compressedRequest);