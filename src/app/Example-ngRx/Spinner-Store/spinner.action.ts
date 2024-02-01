import { createAction, props } from "@ngrx/store";

export const SET_LOADING = `[Shared] set my loading spinner`;
export const SET_ERROR_MESSAGE = `[Shared] set error message`
export const setMyLoadingSpinner = createAction(
    SET_LOADING, 
    props<{ state: boolean }>()
);
export const setErrorMessage = createAction(
    SET_ERROR_MESSAGE,
    props<{ message: string }>()
)