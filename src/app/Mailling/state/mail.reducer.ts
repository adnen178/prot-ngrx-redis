import { createReducer, on } from "@ngrx/store";
import * as mailActions from "./mail.action";
import { initialState } from "./mail.state";




export const MailReducer = createReducer(initialState,
    on(mailActions.loadMailSuccess, (state, action) => {
        return {
            ...state,
            mails : action.mails
        }
    }),
    on(mailActions.removeMailSuccess, (state, action) => {
        return {
            ...state,
            mails : state.mails.filter(x => x.id !== action.mailId)
        }
    }),
   
)
