import { createReducer, on } from "@ngrx/store";
import * as AuthActions from "./auth.action";
import { initialState } from "./auth.state";



export const authReducer = createReducer(initialState,
    on(AuthActions.loginSuccess, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    }),
  
)
