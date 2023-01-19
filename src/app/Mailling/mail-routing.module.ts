import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayDriversComponent } from './display-drivers/display-drivers.component';
import { MailComponent } from './mail/mail.component';



const routes: Routes = [
  { path: '', redirectTo: 'inbox', pathMatch: 'full' },
  {path:"inbox" , component: MailComponent},
  {path:"driver" , component: DisplayDriversComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailingRoutingModule { }
