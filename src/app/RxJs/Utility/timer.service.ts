import { Injectable } from '@angular/core';
import { Observable, Subject, timer } from 'rxjs';

@Injectable()
export class TimerService {
  private timerSubject = new Subject<number>();

  startTimer(interval: number): Observable<number> {
    timer(0, interval).subscribe((value) => {
      this.timerSubject.next(value);
    });
    return this.timerSubject.asObservable();
  }
}
