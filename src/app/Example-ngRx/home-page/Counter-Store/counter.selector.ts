import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICounterState } from "./counter.reducers";

export const COUNTER_STATE_NAME = 'counter';
const getCounter = createFeatureSelector<ICounterState>(COUNTER_STATE_NAME);

export const getCounterCountSelector = createSelector(getCounter, (state) => {
    return state.count;
});

export const getCounterTagSelector = createSelector(getCounter, (state) => {
    return state.tag;
});