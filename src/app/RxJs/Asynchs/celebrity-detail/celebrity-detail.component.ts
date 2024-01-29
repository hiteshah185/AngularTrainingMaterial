import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EMPTY, Subject, catchError } from 'rxjs';
import { MovieDataService } from 'src/app/Example-ngRx/movie-data.service';

@Component({
  selector: 'app-celebrity-detail',
  templateUrl: './celebrity-detail.component.html',
  styleUrls: ['./celebrity-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CelebrityDetailComponent {
  pageTitle: string = 'Celebrity Detail'
  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();
  celebrity$ = this._movieDataService.selectedCelebrity$
    .pipe(catchError(
      err => {
        this.errorMessageSubject.next(err);
        return EMPTY;
      })
    );
  constructor(
    private _movieDataService: MovieDataService
  ) { }

}
