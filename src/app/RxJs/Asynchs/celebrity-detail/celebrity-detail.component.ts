import { ChangeDetectionStrategy, Component } from '@angular/core';

import { EMPTY, Subject, catchError, combineLatest, filter, map } from 'rxjs';
import { MovieDataService } from 'src/app/Example-ngRx/movie-data.service';
import { ICelebrity } from 'src/app/Example-ngRx/Movie.model';

@Component({
  selector: 'app-celebrity-detail',
  templateUrl: './celebrity-detail.component.html',
  styleUrls: ['./celebrity-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CelebrityDetailComponent {
  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  celebrity$ = this._movieDataService.selectedCelebrity$
    .pipe(catchError(
      err => {
        this.errorMessageSubject.next(err);
        return EMPTY;
      })
    );

  pageTitle$ = this.celebrity$.pipe(
    map(celebrity => celebrity ? `Celebrity Detail for: ${celebrity.name} ` : null)
  )

  viewModel$ = combineLatest([
    this.celebrity$,
    this.pageTitle$
  ]).pipe(
    filter(([celebrity]) => Boolean(celebrity)),
    map(([celebrity, title]) => ({ celebrity, title }))
  )

  constructor(
    private _movieDataService: MovieDataService
  ) { }

}
