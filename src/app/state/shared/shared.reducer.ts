import { createReducer, on } from '@ngrx/store';
import { setErrorMsg, setLoadingSpinner } from './shared.action';
import { initialState } from './shared.state';

export const sharedReducer = createReducer(initialState,
  on(setLoadingSpinner, (state, action) => {
    return {
      ...state,
      showLoading: action.status,
    };
  }),
  on(setErrorMsg, (state, action) => {
    return {
      ...state,
      message: action.message,
    };
  }),
);
