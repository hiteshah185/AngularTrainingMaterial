import { createAction, props } from "@ngrx/store";
import { Tags } from "./counter.reducers";

export const incrementCounter = createAction('[Counter] Increment');
export const decrementCounter = createAction('[Counter] Decrement');
export const resetCounter = createAction('[Counter] Reset');
export const customIncrement = createAction('[Counter] Custom Increment', props<{ value: number }>());
export const changeCounterType = createAction('[Counter] Tag Changed', props<{ tag: Tags }>());