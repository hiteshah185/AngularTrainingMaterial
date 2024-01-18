import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Movie } from './Movie.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  private readonly baseURL = 'api/movies';

  constructor(private _http: HttpClient) { }
  getMovies(): Observable<Movie[]> {
    return this._http.get<Movie[]>(this.baseURL).pipe(
      catchError(this.handleError)
    );
  }

  addMovies(movie: Movie): Observable<Movie> {
    movie.id = 0;
    return this._http.post<Movie>(this.baseURL, movie).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    console.error(err);
    return throwError(err);
  }
}