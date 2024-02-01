import { createReducer, on } from "@ngrx/store";
import { decrementCounter, incrementCounter, resetCounter } from "./counter.action";

export const initialCounterState = 0;
export const counterReducer = createReducer(
    initialCounterState,
    on(incrementCounter, (state) => state + 1),
    on(decrementCounter, (state) => state - 1),
    on(resetCounter, (state) => state * 0),
    // on(customIncrement, (state) => (state * 1.5))
)