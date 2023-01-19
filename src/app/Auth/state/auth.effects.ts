import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { AppState } from 'src/app/state/app.state';
import * as AuthActions from './auth.action';

@Injectable({
  providedIn: 'root'
})
export class AuthEffects {
  constructor(
    private action$: Actions,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) { }

  login$ = createEffect(() => {
    return this.action$.pipe(
      ofType(AuthActions.loginStart),
      exhaustMap(action => {
        return this.authService.SignIn(action.email, action.password)
          .pipe(map((data: any) => {
          
            return AuthActions.loginSuccess({ user: data, redirectTo: "/messenger" });
          }),
            catchError(err => {
              return of(setErrorMsg({ message: err.error.error }));
            }),
          )
      })
    )
  })

  

  loginRedirect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(...[AuthActions.loginSuccess]),
      tap(action => {
        if (action.redirectTo) {
          this.authService.setUserInLS(action.user, action.user.token);
          this.router.navigate([action.redirectTo])
        }
      })
    )
  }, { dispatch: false })


}
function setErrorMsg(arg0: { message: any; }): any {
  throw new Error('Function not implemented.');
}

