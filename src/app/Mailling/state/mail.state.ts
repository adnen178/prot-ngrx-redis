import { Mail } from "src/app/Models/Mail";

export interface MailState {
    mails : Mail[] ;
}

export const initialState : MailState = {
    mails: []
}