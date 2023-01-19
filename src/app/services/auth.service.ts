import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Renderer2 } from '@angular/core';
import { map } from 'rxjs/operators';
import { AppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import * as AuthActions from '../Auth/state/auth.action';
import { DOCUMENT } from '@angular/common';
import { ThemeService } from './theme.service';

export interface Country {
  name: string, code: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private http: HttpClient,
  
    private themeService : ThemeService,
    private store : Store<AppState>) {

  }

  setUserInLS(user :any,token:any) {
    localStorage.setItem("user_data", JSON.stringify(user));
    localStorage.setItem("token", token);
  }

  getUserFromLS() {
    const userDataString = localStorage.getItem('user_data');
    const token = localStorage.getItem('token');
    if (userDataString) {
      const user = JSON.parse(userDataString);
      return user;
    }
    return null;
  }

 
  getUserFromToken() {
    let token = localStorage.getItem("token");
    return token;
  }


  SignIn(userName : any, password : any) {
    return this.http.post<any>("" + "Auth/SignIn", {
      UserName: userName,
      Password: password
    });
  }


}
