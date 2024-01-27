import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMovie } from 'src/app/Example-ngRx/Movie.model';
import { MovieDataService } from 'src/app/Example-ngRx/movie-data.service';
import { EMPTY, catchError } from 'rxjs';

@Component({
  selector: 'app-movie-chart-list',
  templateUrl: './movie-chart-list.component.html',
  styleUrls: ['./movie-chart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieChartListComponent {
  pageTitle: string = 'Movies of 2023';
  errorMessage: string = '';

  //Declarative way of gathering data
  movies$ = this._movieDataService.movie$
    .pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY
      })
    );
  constructor(
    private _movieDataService: MovieDataService
  ) {

  }

}
