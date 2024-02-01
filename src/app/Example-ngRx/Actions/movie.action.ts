import { createAction, props } from "@ngrx/store";
import { Movie } from "../Movie.model";

export const getMovies = createAction('[Movie] from Data Source');
export const getMoviesSuccess = createAction(
    '[Movie] Get movie success',
    (movies: ReadonlyArray<Movie>) => ({ movies })
    // props<{ movies: ReadonlyArray<Movie> }>()
);

export const incrementMovie = createAction('[Movie] incremented');
export const decrementMovie = createAction('[Movie] decremented');
export const resetMovies = createAction('[Movie] List Reset')
export const addMovies = createAction('[Movie] added', (movie: Movie) => movie);
export const addMoviesSuccess = createAction(
    '[Movie] Add movie success',
    // props<{ movie: Movie }>(),
    (movie: Movie) => ({ movie })
);
export const assignUser = createAction(
    '[User] assign user',
    (user: string) => ({ user })
);

export const deleteMovie = createAction(
    '[Movie] Delete movie',
    (movieId: number) => ({ movieId })
);

export const deleteMovieSuccess = createAction(
    '[Movie] Delete movie success',
    (movieId: number) => ({ movieId })
);

export const updateMovie = createAction(
    '[Movie] Update movie',
    (movie: Movie) => ({ movie })
);

export const updateMovieSuccess = createAction(
    '[Movie] Update movie success',
    (movie: Movie) => ({ movie })
);

export const logout = createAction('[User] logout');



export const incrementCounter = createAction('[Counter] Increment');
export const decrementCounter = createAction('[Counter] Decrement');
export const resetCounter = createAction('[Counter] Reset');
export const customIncrement = createAction('[Counter] Custom Increment', props<{ value: number }>)();