import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomErrorHandlerService implements ErrorHandler{
  public handleError(error: any): void {
  const date = new Date();
  console.error({
    timeStamp: date.toISOString(),
    message: error.message,
    zone:error.zone
  });
  }

  constructor() { }
}
