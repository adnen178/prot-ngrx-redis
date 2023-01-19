import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay, tap } from 'rxjs';
import { Driver } from '../Models/Driver';
import { DriversCacheService } from '../services-cache/drivers.Cache.service';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  readonly endpoint = 'https://localhost:7187/Drivers/drivers';

  constructor(private http: HttpClient, private driverCacheService: DriversCacheService) {
  }

  getDrivers(): Observable<Driver[]> {
    let drivers$ = this.driverCacheService.getValue();
    if (!drivers$) {
      drivers$ = this.http.get(this.endpoint).pipe(
        map((response: any) => response),
        shareReplay(1)
      );
      this.driverCacheService.setValue(drivers$);
    }
    return drivers$;
  }

  // getUser(id: number): Observable<Driver> {
  //   let user$ = this.driverCacheService.getValue(id);

  //   if (!user$) {
  //     user$ = this.http.get(this.endpoint + '/' + id).pipe(
  //       map((response: any) => response.data),
  //       shareReplay(1)
  //     );
  //     this.driverCacheService.setValue(user$, id);
  //   }
  //   return user$;
  // }
}
