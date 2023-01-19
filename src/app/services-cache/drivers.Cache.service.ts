import { Injectable } from '@angular/core';
import { Driver } from '../Models/Driver';
import { AbstractCacheService } from './cache.service';

@Injectable({
  providedIn: 'root'
})
export class DriversCacheService extends AbstractCacheService<Driver[]> {

}
