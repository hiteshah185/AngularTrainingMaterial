import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../login.service';


@Injectable()
export class IdentityGuardService implements CanActivate{
  constructor(private _router:Router,
    private _loginService: LoginService){}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean{
   const usersToken = localStorage.getItem('userToken') 
   if(usersToken){
    return true;
   }
   console.log('Sending User to login Page')
   this._loginService.setUrlAfterLogin(state.url);
   this._router.navigate(['/login']);
   return false;
  }


}
