import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppReducer } from './state/app.state';
import { AuthEffects } from './Auth/state/auth.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {  HttpClientModule } from '@angular/common/http';
import { Navbar1Component } from './layout/navbar1/navbar.component';
import { Navbar2Component } from './layout/navbar2/navbar2.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AuxComponent } from './aux/aux.component';


@NgModule({
  declarations: [
    AppComponent,
    Navbar1Component,
    Navbar2Component,
    AuxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    StoreModule.forRoot(AppReducer),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
