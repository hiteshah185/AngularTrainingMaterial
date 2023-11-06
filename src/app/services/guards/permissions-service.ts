import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Injectable } from "@angular/core";
import { ServerGuildService } from "../server-guild.service";
import { Observable,of,delay ,tap} from 'rxjs';

@Injectable()
export class PermissionsService{
    constructor(private _serverGuild:ServerGuildService){}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):Observable<boolean>{
        const isAllowed = localStorage.getItem('isAllowed');
        if(isAllowed){
            console.log("From LocalStorage");
            return of(true).pipe(
                delay(1000)
            )
        }
        console.log('Sending Permission to login ');
        return this._serverGuild.authorize().pipe(tap(()=>{
            console.log('Permission from Login')
            localStorage.setItem('isAllowed','true')}));  
    
    }

}