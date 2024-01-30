import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { tap, startWith } from 'rxjs/operators';
import { timer } from 'rxjs';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements
  OnInit, OnDestroy {
  timerValue!: number;
  remainingTime$ = interval(1000).pipe(startWith(0)); // Start with 0 initially
  private timerSubscription!: Subscription;
  constructor(
    private _timerService: TimerService
  ) { }
  ngOnInit(): void {
    // timer(0, 1000).subscribe((value) => {
    //   this.timerValue = value;
    // });
    this.timerSubscription = this.remainingTime$.subscribe(time => {
      console.log('Time remaining:', time);
    });
    this._timerService.startTimer(1000).subscribe((value) => {
      this.timerValue = value;
    });
  }
  startTimer() {
    this.timerSubscription.unsubscribe(); // Stop any existing timer
    this.timerSubscription = interval(1000).pipe(
      tap(time => this.remainingTime$.pipe(startWith(time)).subscribe()), // Update remainingTime$
      startWith(10) // Start from 10 seconds
    ).subscribe();
  }


  stopTimer() {
    this.timerSubscription.unsubscribe();
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

}
