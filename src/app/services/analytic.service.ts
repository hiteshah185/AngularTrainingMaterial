import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyticService {

  constructor() { }
  track(pageName:string){
    console.log(`Tracking page:${pageName}`);
  }
}
