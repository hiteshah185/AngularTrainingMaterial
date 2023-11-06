import { ServerGuildService } from './server-guild.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDetails } from '../model/person-data.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlToRedirectTo!:string | null;
  constructor(
    private _router: Router,
    private _serverGuildService: ServerGuildService
  ) { }

  setUrlAfterLogin(url:string){
    this.urlToRedirectTo = url;
  }

  login(userDetails: LoginDetails){
    return this._serverGuildService.authenticate()
    .subscribe(()=>{
      console.log("Return request from Server");
      localStorage.setItem('userToken','0471')
      if(this.urlToRedirectTo){
        this._router.navigate([this.urlToRedirectTo]);
        this.urlToRedirectTo=null;
      }
    })
  }
}
