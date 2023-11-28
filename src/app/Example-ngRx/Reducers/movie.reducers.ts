import { createReducer, on } from "@ngrx/store";
import { Movie } from "../Movie.model";
import {
    addMovies,
    decrementCounter,
    getMovies,
    incrementCounter,
    resetCounter,
    resetMovies
} from "../Actions/movie.action";



export interface MovieState {
    movies: ReadonlyArray<Movie>,
    user: Readonly<string>;

}
const initialState: ReadonlyArray<Movie> = []
export const movieReducer = createReducer(
    initialState,
    on(getMovies, (state) => [...mockMovies()]),
    on(addMovies, (state, movie) => [...state, movie]),
    on(resetMovies, (state) => [])
    // on(getMovies, (state) => [...state])
)

function mockMovies(): Movie[] {
    const movie1 = new Movie(
        "Kaithi",
        105,
        new Date('25 Oct, 2019 05:30:00'),
    )
    const movie2 = new Movie(
        "Vikram",
        500,
        new Date('03 Jun, 2022 05:30:00')
    )
    const movie3 = new Movie(
        "Leo",
        620,
        new Date('19 Oct, 2023 05:30:00')
    )
    movie1.id = 1;
    movie2.id = 2;
    movie3.id = 3;
    const movies = [movie1, movie2, movie3];
    return movies;

}

export const initialCounterState = 0;
export const counterReducer = createReducer(
    initialCounterState,
    on(incrementCounter, (state) => state + 1),
    on(decrementCounter, (state) => state - 1),
    on(resetCounter, (state) => state * 0)
);