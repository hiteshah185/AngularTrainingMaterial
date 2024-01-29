import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError, map, BehaviorSubject, combineLatest, Subject, merge, scan } from 'rxjs';
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

  private insertedMovie = new Subject<IMovie>();
  //public insertedMovie$ = this.insertedMovie.asObservable();

  public moviesWithInserted$ = merge(
    this.movie$, this.insertedMovie.asObservable()
  ).pipe(
    scan((acc, value) => (value instanceof Array) ? [...value] : [...acc, value], [] as IMovie[])
  );

  private fakeMovie(): IMovie {
    return {
      id: 22,
      name: 'Teranet Movie',
      earning: 100000,
      userName: 'TERANET-TRV-RPS',
      celebrity: 100
    } as IMovie;
  }
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
  addAFakeMovie(newMovie?: IMovie) {
    newMovie = newMovie || this.fakeMovie();
    this.insertedMovie.next(newMovie);
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