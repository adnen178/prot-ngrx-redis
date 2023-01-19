import { MailReducer } from "../Mailling/state/mail.reducer";
import { MAIL_STATE_NAME } from "../Mailling/state/mail.selectors";
import { MailState } from "../Mailling/state/mail.state";

import { sharedReducer } from "./shared/shared.reducer";
import { SHARED_STATE_NAME } from "./shared/shared.selectors";
import { SharedState } from "./shared/shared.state";

export interface AppState {
    [SHARED_STATE_NAME]: SharedState;
    [MAIL_STATE_NAME] : MailState;
}

export const AppReducer  = {
    [SHARED_STATE_NAME]: sharedReducer,
    [MAIL_STATE_NAME]: MailReducer,
}