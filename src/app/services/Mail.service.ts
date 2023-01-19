import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay, tap } from 'rxjs';
import { Mail } from '../Models/Mail';
import { MailCacheService } from '../services-cache/Mail.Cache.service';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  readonly endpoint = 'https://localhost:7187/api/Mail/';

  constructor(private http: HttpClient, private mailCacheService: MailCacheService) {
  }

  getMails(): Observable<Mail[]> {
    let Mails$ = this.mailCacheService.getValue();
    if (!Mails$) {
        Mails$ = this.http.get(this.endpoint+"Get").pipe(
        map((response: any) => response),
        shareReplay(1)
      );
      this.mailCacheService.setValue(Mails$);
    }
    return Mails$;
  }

  removeMailById(id:number){
    this.mailCacheService.clearCache();
    return this.http.delete(this.endpoint+`Delete?id=${id}`);
  }

}
