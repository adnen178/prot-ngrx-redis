import { Injectable } from '@angular/core';
import { Mail } from '../Models/Mail';
import { AbstractCacheService } from './cache.service';

@Injectable({
  providedIn: 'root'
})
export class MailCacheService extends AbstractCacheService<Mail[]> {

}
