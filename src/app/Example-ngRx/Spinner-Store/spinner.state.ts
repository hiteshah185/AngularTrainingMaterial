export interface SharedState {
    showLoading: boolean;
    errorMessage: string;
};
export const initialSpinnerState: SharedState = {
    showLoading: false,
    errorMessage: ''
};