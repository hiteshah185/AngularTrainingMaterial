import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MovieState } from "../Reducers/movie.reducers";
import { Movie } from "../Movie.model";

export const movieSelector = createSelector(
    (state: MovieState) => state.movies,
    (movies: ReadonlyArray<Movie>) => movies
);

export const movieUserSelector = createSelector(
    (state: MovieState) => state.movies,
    (state: MovieState) => state.user,
    (movies: ReadonlyArray<Movie>, user: Readonly<string>) => {
        return movies.filter((movie: Movie) => movie.userName === user)
    })

export const greater = (amount: number) => {
    createSelector(movieSelector, (movies) => {
        return movies.filter((movie: Movie) => movie.earning >= amount);
    });
}
const getCounterState = createFeatureSelector<{ value: number }>('value');
export const getCounter = createSelector(getCounterState, state => { return state.value; });