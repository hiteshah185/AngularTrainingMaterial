import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie.model';
import { Store } from '@ngrx/store';
import { addMovies, decrementCounter, getMovies, incrementCounter, resetCounter } from '../Actions/movie.action';
import { Observable } from 'rxjs';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  count$!: Observable<number>;
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


}
