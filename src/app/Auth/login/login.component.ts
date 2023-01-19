import { Component, Inject, NgZone, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { isAuthenticated } from '../state/auth.selectors';
import * as sharedActions from 'src/app/state/shared/shared.action';
import * as sharedSelectors from 'src/app/state/shared/shared.selectors';
import * as AuthActions from '../state/auth.action';
import { AuthService } from 'src/app/services/auth.service';
import { AppState } from 'src/app/state/app.state';


declare let FB: any;
declare let google: any;
declare let handleGoogleAuthResponse: Function;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: any;
  userName: any;
  password: any;

  constructor(
    private route: Router,
    private ngZone: NgZone,
    private renderer: Renderer2,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private store: Store<AppState>,) {
   
    //Init login form
    this.loginForm = this.formBuilder.group({
      _name: ['', Validators.required],
      _password: ['', Validators.required],
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(sharedActions.setLoadingSpinner({ status: false }));
    this.store.dispatch(sharedActions.setErrorMsg({ message:"" }));
  }

  ngOnInit() {

    this.store.select(isAuthenticated).pipe(take(1)).subscribe(isAuth => {
      if (isAuth)
        this.route.navigate(['/messenger'])
    })
  }

  SignIn() {
    let email: string = this.loginForm.get('_name').value;
    let password: string = this.loginForm.get('_password').value;

    this.store.dispatch(sharedActions.setLoadingSpinner({ status: true }));
    this.store.dispatch(AuthActions.loginStart({ email, password }));
  }

}
 
