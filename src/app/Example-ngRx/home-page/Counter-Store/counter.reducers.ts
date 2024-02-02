import { createReducer, on } from "@ngrx/store";
import { decrementCounter, incrementCounter, resetCounter, customIncrement, changeCounterType } from "./counter.action";

export type Tags = 'asynch' | 'synch' | 'decode' | 'Up' | 'Down' | 'ring' | 'johnson' | 'cascade';
export interface ICounterState {
    count: number;
    tag: Tags;
}
export const defaultCounterState: ICounterState = {
    count: 0,
    tag: 'Up'
}
export const initialCounterState = 0;
export const counterReducer = createReducer(
    initialCounterState,
    on(incrementCounter, (state) => (state + 1)),
    on(decrementCounter, (state) => state - 1),
    on(resetCounter, (state) => state * 0),
    // on(customIncrement, (state) => (state * 1.5))
);

export const newCounterReducer = createReducer(
    defaultCounterState,
    on(incrementCounter, (state) => {
        return {
            ...state,
            count: state.count + 1
        };
    }),
    on(decrementCounter, (state) => {
        return {
            ...state,
            count: state.count - 1
        };
    }),
    on(resetCounter, (state) => {
        return {
            ...state,
            count: defaultCounterState.count
        };
    }),
    on(customIncrement, (state, action) => {
        console.log('Custom-Increment action:', action)
        return {
            ...state,
            count: state.count + action.value
        };
    }),
    on(changeCounterType, (state, action) => {
        console.log('changeCounterType action:', action)
        return {
            ...state,
            tag: action.tag
        };
    })
);