import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SharedState } from "./spinner.state";
export const SHARED_STATE_NAME = 'shared';

const getSharedState = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

export const getMyLoading = createSelector(getSharedState, (state) => {
    return state.showLoading;
});

export const getErrorMessage = createSelector(getSharedState, (state) => {
    return state.errorMessage;
});