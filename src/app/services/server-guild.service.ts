import { Injectable } from '@angular/core';
import { Observable,of,delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerGuildService {

  constructor() { }
  authenticate():Observable<boolean>{
    return of(true).pipe(
      delay(1000)
    );  
  }

  authorize():Observable<boolean>{
    return of(true).pipe(
      delay(1000)
    );
  }
}
