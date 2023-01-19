import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MailState } from "./mail.state";

export const MAIL_STATE_NAME = 'Mail';

const getMailState = createFeatureSelector<MailState>(MAIL_STATE_NAME);


export const getMails = createSelector(getMailState, state => {
    return state.mails ;
})

