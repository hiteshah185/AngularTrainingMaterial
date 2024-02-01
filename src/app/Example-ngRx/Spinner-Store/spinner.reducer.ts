import { createReducer, on } from "@ngrx/store";
import { initialSpinnerState } from "./spinner.state";
import { setErrorMessage, setMyLoadingSpinner } from "./spinner.action";

const _sharedReducer = createReducer(initialSpinnerState,
    on(setMyLoadingSpinner, (state, action) => {
        return {
            ...state,
            showLoading: action.state,
        };
    }),
    on(setErrorMessage, (state, action) => {
        return {
            ...state,
            errorMessage: action.message,
        }
    }));
export function SharedReducer(state: any, action: any) {
    return _sharedReducer(state, action);
};