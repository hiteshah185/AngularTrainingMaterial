import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { incrementCounter, decrementCounter, resetCounter, customIncrement, changeCounterType } from './Counter-Store/counter.action';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  count$!: Observable<number>;
  customIncrementValue!: number;
  constructor(private _store: Store<{ count: number }>) {
    this.count$ = _store.select('count');
  }
  ngOnInit(): void {

  }
  onIncrement() {
    this._store.dispatch(incrementCounter());
  }
  onDecrement() {
    this._store.dispatch(decrementCounter());
  }
  onReset() {
    this._store.dispatch(resetCounter());
  }
  onCustomIncrement() {
    if (!isNaN(this.customIncrementValue) && Boolean(this.customIncrementValue)) {
      this._store.dispatch(customIncrement({ value: +this.customIncrementValue }));
    }
    this._store.dispatch(changeCounterType({ tag: 'Up' }));
  }

}
