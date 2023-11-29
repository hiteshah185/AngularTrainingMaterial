import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private readonly _snackbar: MatSnackBar,
    private readonly _zone: NgZone) { }

  default(message: string) {
    this.show(message, {
      duration: 2000,
      panelClass: 'default-notification-overlay'
    })
  }
  info(message: string) {
    this.show(message, {
      duration: 2000,
      panelClass: 'info-notification-overlay'
    })
  }
  success(message: string) {
    this.show(message, {
      duration: 2000,
      panelClass: 'success-notification-overlay'
    })
  }
  warn(message: string) {
    this.show(message, {
      duration: 2500,
      panelClass: 'warn-notification-overlay'
    })
  }
  error(message: string) {
    this.show(message, {
      duration: 3000,
      panelClass: 'error-notification-overlay'
    })
  }
  private show(message: string, configuration: MatSnackBarConfig) {
    this._zone.run(() => this._snackbar.open(message, undefined, configuration));
  }

}
