import { CommonModule } from '@angular/common';
import {  NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { DisplayDriversComponent } from './display-drivers/display-drivers.component';
import { MailingRoutingModule } from './mail-routing.module';
import { MailComponent } from './mail/mail.component';
import { MailEffects } from './state/mail.effects';



@NgModule({
  declarations: [
    DisplayDriversComponent,
    MailComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,  
    MailingRoutingModule,
    EffectsModule.forFeature([MailEffects])

  ],
}) 
export class MailingModule { }
