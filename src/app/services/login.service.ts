import { UserInterface } from './../Authorization-Authentication-Login/login-page/login-page.component';
import { ServerGuildService } from './server-guild.service';
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDetails } from '../model/person-data.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlToRedirectTo!: string | null;
  currentUserSig = signal<UserInterface | undefined | null>(undefined);
  private userLoggedTime!: number;
  private clearTimeOut: any;
  constructor(
    private _router: Router,
    private _serverGuildService: ServerGuildService
  ) {
    const expireTime = this.userLoggedTime * 1000 * 60 * 60 * 24;
    this.autoLogOut(expireTime);
  }

  setUserLogTime(value: number) {
    this.userLoggedTime = value;
  }
  setUrlAfterLogin(url: string) {
    this.urlToRedirectTo = url;
  }

  login(userDetails: LoginDetails) {
    return this._serverGuildService.authenticate()
      .subscribe(() => {
        console.log("Return request from Server");
        localStorage.setItem('userToken', '0471')
        if (this.urlToRedirectTo) {
          this._router.navigate([this.urlToRedirectTo]);
          this.urlToRedirectTo = null;
        }
      })
  }
  logOut() {
    if (localStorage.getItem("userToken")?.length != 0) {
      localStorage.removeItem("userToken");
      this._router.navigateByUrl('/login');
    }
  }
  autoLogOut(expirationPeriod: number) {
    this.clearTimeOut = setTimeout(() => {
      this.logOut();
    }, expirationPeriod);

  }
}
