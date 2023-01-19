import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

export const Auth_STATE_NAME = 'Auth';

const getAuthState = createFeatureSelector<AuthState>(Auth_STATE_NAME);

export const isAuthenticated = createSelector(getAuthState, state => {
    return ( localStorage.hasOwnProperty("token") && localStorage.hasOwnProperty("user_data") ) ? true : false ;
})
export const getUser = createSelector(getAuthState, state => {
    return state.user ;
})
