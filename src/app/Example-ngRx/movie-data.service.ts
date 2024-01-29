import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError, map, BehaviorSubject, combineLatest } from 'rxjs';
import { ICelebrity, IMovie, Movie } from './Movie.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  private readonly baseURL = 'assets/movies.json';
  private readonly celebrityURL = 'assets/celebrity.json';
  movie$ = this._http.get<IMovie[]>(this.baseURL)
    .pipe(
      // tap(data => console.log('Data From API:', JSON.stringify(data))),
      // map(movies => movies.map(m => ({
      //   name: m.name,
      //   earning: m.earning ? m.earning * 1 / 100000 : 0,
      //   userName: m.userName
      // } as IMovie ))),

      //Spread Operator
      map(movieArray => movieArray.map(
        movie => ({
          ...movie,
          earning: movie.earning ? movie.earning / 10000 : 0
        }
        ) as IMovie
      )),
      catchError(this.handleError)
    )
  celebrity$ = this._http.get<ICelebrity[]>(this.celebrityURL)
    .pipe(
      // tap(c => console.log(`Data from celebrity API:`, JSON.stringify(c))),
      catchError(this.handleError));
  private selectedCelebrity = new BehaviorSubject<number>(0);
  public selectedCelebrity$ = combineLatest([this.celebrity$, this.selectedCelebrity.asObservable()])
    .pipe(
      map(([celebrities, selectedCelebrity]) =>
        celebrities.find(celebrity => celebrity.id === selectedCelebrity)),
      tap(celebrity => { console.log('Selected Celebrity:', celebrity); })
    );
  constructor(private _http: HttpClient) { }
  getMovies(): Observable<Movie[]> {
    return this._http.get<Movie[]>(this.baseURL).pipe(tap(data => console.log('All Movie Data:', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addMovies(movie: Movie): Observable<Movie> {
    movie.id = 0;
    return this._http.post<Movie>(this.baseURL, movie).pipe(tap(value => console.log("Added Movie:", value)),
      catchError(this.handleError)
    );
  }

  selectedCelebrityChanged(selectedCelebrityId: number): void {
    this.selectedCelebrity.next(selectedCelebrityId);
  }
  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      //Client Side / Network error occurred 
      errorMessage = `An error occurred in client/network:${err.error.message}`;
    }
    else {
      //Unsuccessful return code from Backend
      errorMessage = `Backend returned code: ${err.status}:${err.message}`
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}