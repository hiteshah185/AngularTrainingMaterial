import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EMPTY, Observable, Subject, catchError } from 'rxjs';
import { MovieDataService } from 'src/app/Example-ngRx/movie-data.service';
import { ICelebrity } from 'src/app/Example-ngRx/Movie.model';

@Component({
  selector: 'app-celebrity-list',
  templateUrl: './celebrity-list.component.html',
  styleUrls: ['./celebrity-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CelebrityListComponent {
  pageTitle: string = 'Celebrity List';
  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();
  celebrity$: Observable<ICelebrity[]> = this._movieService.celebrity$.pipe(
    catchError(err => {
      this.errorMessageSubject.next(err);
      return EMPTY;
    })
  );
  selectedCelebrity$ = this._movieService.selectedCelebrity$;
  constructor(private _movieService: MovieDataService) { }

  onSelectedCelebrity(celebrityId: number) {
    this._movieService.selectedCelebrityChanged(celebrityId);
  }
}
