import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MovieState } from '../Reducers/movie.reducers';
import { greater, movieUserSelector } from '../Selector/movie.selector';
import { Movie } from '../Movie.model';
import { MovieDataService } from '../movie-data.service';
import { Subject, takeUntil } from 'rxjs';
import { deleteMovie, updateMovie } from '../Actions/movie.action';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy{
  movies$ = this.store.pipe(select(movieUserSelector));
  movies!: Movie[];
  done = new Subject();
  selectedIndex!: number | null;
  earning = 0;
  constructor(private store: Store<MovieState>) { }

  ngOnInit(): void {
    this.movies$
      .pipe(takeUntil(this.done))
      .subscribe((data) => (this.movies = JSON.parse(JSON.stringify(data))));
    // setTimeout(() => {
    //   this.movies$ = this.store.pipe(select(greater(2000)));
    // }, 5000);
  }

  enableEdit(movie: Movie, index: number): void {
    this.selectedIndex = index;
    this.earning = movie.earning;
  }

  cancelEdit(): void {
    this.selectedIndex = null;
  }

  // update the earning from the input then dispatch update action
  update(movie: Movie): void {
    const m = { ...movie };
    m.earning = this.earning;
    // dispatch action to update
    this.store.dispatch(updateMovie(m));
    this.selectedIndex = null;
  }

  deleteMovie(movieId: number): void {
    this.store.dispatch(deleteMovie(movieId));
  }

  ngOnDestroy(): void {
    //this.done.next();
    this.done.complete();
  }

}
