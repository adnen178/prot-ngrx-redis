import { createAction, props } from "@ngrx/store";
import { Mail } from "src/app/Models/Mail";

export const LOAD_MAIL_START = '[mail page] load mail start';
export const LOAD_MAIL_SUCCESS = '[mail page] load mail Success';

export const ADD_MAIL_START = '[mail page] add mail start';
export const ADD_MAIL_SUCCESS = '[mail page] add mail Success';
export const ADD_MAIL_FAIL = '[mail page] add mail Fail';

export const REMOVE_MAIL_START = '[mail page] remove mail start';
export const REMOVE_MAIL_SUCCESS = '[mail page] remove mail success';

export const loadMailStart = createAction(LOAD_MAIL_START );
export const loadMailSuccess = createAction(LOAD_MAIL_SUCCESS, props<{mails: Mail[]}>() );

export const addMailStart = createAction(ADD_MAIL_START, props<{mailObj: Mail}>() );
export const addMailSuccess = createAction(ADD_MAIL_SUCCESS, props<{mailObj: Mail}>() );

export const removeMailStart = createAction(REMOVE_MAIL_START, props<{mailId: number}>() );
export const removeMailSuccess = createAction(REMOVE_MAIL_SUCCESS, props<{mailId: number}>() );


