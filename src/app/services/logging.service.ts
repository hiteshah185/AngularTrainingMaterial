import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  private myData = new BehaviorSubject("<----Default Message---->");
  public myObserver = this.myData.asObservable();

  // constructor() { }

  logging(status:string){
    console.log(status);
  }
  warning(message:string){
    console.warn(message);
  }
  alert(message:string){
    window.alert(message);
  }
  
  sendData(data:any){
    console.log(data);
    this.myData.next(data)
  }
  

}
