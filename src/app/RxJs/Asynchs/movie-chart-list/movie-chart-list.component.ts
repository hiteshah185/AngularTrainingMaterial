import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICelebrity, IMovie } from 'src/app/Example-ngRx/Movie.model';
import { MovieDataService } from 'src/app/Example-ngRx/movie-data.service';
import { BehaviorSubject, EMPTY, Observable, catchError, combineLatest, map, shareReplay } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';
import { SupplierService } from '../supplier.service';

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
  private count: number = 0;
  isLoading$ = this._movieDataService.isLoading$;

  //Declarative way of gathering data
  movies$ = this._movieDataService.moviesWithInserted$
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
    private _movieDataService: MovieDataService,
    private _notificationService: NotificationService,
    private _supplierService: SupplierService
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
        }) as IMovie)),
        shareReplay(1)
      );
  }

  onAdd() {
    if (this.count < 1) {
      this.count++
      this._movieDataService.addAFakeMovie();
    } else {
      this._notificationService.warn("Cannot add more than 1 fake movie.")
    }
  }
  onRefresh() {
    this._movieDataService.refreshMovieData();
  }

}