import { ErrorHandler, Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomErrorHandlerService implements ErrorHandler {
  constructor(private _notificationService: NotificationService) { }

  handleError(error: any | Error | HttpErrorResponse): void {
    let displayMessage: string = "Error has occurred";
    if (!environment.production) {
      displayMessage += " Check the console for details";
      const date = new Date();
      console.error({
        timeStamp: date.toISOString(),
        message: error.message,
        zone: error.zone
      })
    }
    this._notificationService.error(displayMessage);
  }

}

// */
// @Injectable()
// export class AppErrorHandler extends ErrorHandler {
//   constructor(private notificationsService: NotificationService) {
//     super();
//   }

//   handleError(error: Error | HttpErrorResponse) {
//     let displayMessage = 'An error occurred.';

//     if (!environment.production) {
//       displayMessage += ' See console for details.';
//     }

//     this.notificationsService.error(displayMessage);

//     super.handleError(error);
//   }
// }
