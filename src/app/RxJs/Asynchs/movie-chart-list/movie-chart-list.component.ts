import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICelebrity, IMovie } from 'src/app/Example-ngRx/Movie.model';
import { MovieDataService } from 'src/app/Example-ngRx/movie-data.service';
import { BehaviorSubject, EMPTY, Observable, catchError, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-movie-chart-list',
  templateUrl: './movie-chart-list.component.html',
  styleUrls: ['./movie-chart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieChartListComponent {
  pageTitle: string = 'Movies of 2023';
  errorMessage: string = '';
  showCelebrity: boolean = false;

  //Declarative way of gathering data
  movies$ = this._movieDataService.movie$
    .pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY
      })
    );
  celebrity$: Observable<ICelebrity[]> = this._movieDataService.celebrity$.pipe(
    catchError(err => {
      this.errorMessage = err;
      return EMPTY
    }));

  movieWithCelebrity$!: Observable<IMovie[]>;
  private selectedCelebrity = new BehaviorSubject<string>('0');

  constructor(
    private _movieDataService: MovieDataService
  ) { }

  showCelebrityTable() {
    this.showCelebrity = !this.showCelebrity;
    if (this.showCelebrity) {
      this.combineCelebrityAndMovie();
    }
  }
  onSelected(celebrityName: string) {
    if (celebrityName.toString() == "0") {
      this.combineCelebrityAndMovie();
    } else {
      this.selectedCelebrity.next(celebrityName);
      this.movieWithCelebrity$ = combineLatest([this.movieWithCelebrity$, this.selectedCelebrity.asObservable()])
        .pipe(
          map(([movies, selectedCelebrity]) => movies.filter(movie => selectedCelebrity ? movie.celebrity?.toString() === selectedCelebrity : true)),
          catchError(err => {
            this.errorMessage = err;
            return EMPTY;
          })
        );
    }
  }
  combineCelebrityAndMovie() {
    this.movieWithCelebrity$ = combineLatest([this.movies$, this.celebrity$])
      .pipe(
        map(([movies, celebrities]) => movies.map(movie => ({
          ...movie,
          celebrity: celebrities.find(c => movie.celebrity == c.id)?.name,
        }) as IMovie))
      );
  }

  onAdd() {
  }

}