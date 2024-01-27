import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError, map } from 'rxjs';
import { IMovie, Movie } from './Movie.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  private readonly baseURL = 'api/movie/movies';
  movie$ = this._http.get<IMovie[]>(this.baseURL)
    .pipe(
      tap(data => console.log('Data From API:', JSON.stringify(data))),
      catchError(this.handleError)
    )

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