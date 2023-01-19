import {  NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent, 
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,  
    AuthRoutingModule
  ],
}) 
export class AuthModule { }
