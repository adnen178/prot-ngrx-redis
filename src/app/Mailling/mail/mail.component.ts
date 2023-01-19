import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Mail } from 'src/app/Models/Mail';
import { AppState } from 'src/app/state/app.state';
import * as mailSelectors from 'src/app/Mailling/state/mail.selectors';
import * as mailActions from 'src/app/Mailling/state/mail.action';


@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  mails$: Observable<Mail[]>;

  constructor(
    private store : Store<AppState>,
    private router:Router) {
  }

  ngOnInit(): void { 
    this.mails$ = this.store.select(mailSelectors.getMails);

    this.store.dispatch(mailActions.loadMailStart());
  }

  remove(id:number){
    this.store.dispatch(mailActions.removeMailStart({mailId:id}));
  }

}
