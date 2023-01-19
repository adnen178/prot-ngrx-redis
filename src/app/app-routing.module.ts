import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuxComponent } from './aux/aux.component';

const routes: Routes = [
  {
    path: '',
    component: AuxComponent
  },

  {
    path: "" ,
    loadChildren: () => import('./Mailling/mail.module').then((m) => m.MailingModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
