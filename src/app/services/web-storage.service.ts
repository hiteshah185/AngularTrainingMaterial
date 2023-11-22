import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebStorageService {
  get(key:string):string | null{
    return window.localStorage.getItem(key);
  }
  set(key:string, value:string){
    window.localStorage.setItem(key,value);
  }

  constructor() { }
}
