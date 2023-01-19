import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { MailService } from 'src/app/services/Mail.service';
import { AppState } from 'src/app/state/app.state';
import { setErrorMsg, setLoadingSpinner } from 'src/app/state/shared/shared.action';
import * as mailActions from "./mail.action";

@Injectable({
  providedIn: 'root'
})
export class MailEffects {
  constructor(
    private action$: Actions,
    private mailService: MailService,
    private store: Store<AppState>,
    private router: Router
  ) { }

  loadMails$ = createEffect(() => {
    return this.action$.pipe(
      ofType(mailActions.loadMailStart),
      exhaustMap(action => {
        return this.mailService.getMails()
          .pipe(map((data: any) => {
            return mailActions.loadMailSuccess({ mails:data });
          }),
            catchError(err => {
              return of(setErrorMsg({ message: err.error.error }));
            }),
          )
      })
    )
  })

  removeMails$ = createEffect(() => {
    return this.action$.pipe(
      ofType(mailActions.removeMailStart),
      exhaustMap(action => {
        return this.mailService.removeMailById(action.mailId)
          .pipe(map((data: any) => {
            console.log(data);
            return mailActions.removeMailSuccess({mailId:action.mailId});
          }),
            catchError(err => {
              return of(setErrorMsg({ message: err.error.error }));
            }),
          )
      })
    )
  })

}
