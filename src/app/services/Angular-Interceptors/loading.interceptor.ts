import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from '../loader.service';

// Interceptor can be used to show and hide loading spinners or progress bars during HTTP requests
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private totalRequests: number = 0;
  constructor(
    private _loadingService: LoaderService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.totalRequests++;
    this._loadingService.setLoading(true);
    //this._loadingService.showSpinner();
    return next.handle(request)
      .pipe(
        finalize(() => {
          this.totalRequests--;
          if (this.totalRequests == 0) {
            this._loadingService.setLoading(false);
            //this._loadingService.hideSpinner();
          }
        })
      );
  }
}
