import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from 'src/app/Auth/state/auth.state';
import { SharedState } from './shared.state';

export const SHARED_STATE_NAME = 'shared';
const getSharedState = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

export const getLoading = createSelector(getSharedState, (state) => {
  return state.showLoading;
});

export const getErrorMsg = createSelector(getSharedState, (state) => {
  return state.message;
});

