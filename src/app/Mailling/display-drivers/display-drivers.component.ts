import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Driver } from 'src/app/Models/Driver';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-display-drivers',
  templateUrl: './display-drivers.component.html',
  styleUrls: ['./display-drivers.component.css']
})
export class DisplayDriversComponent  {

  
  drivers$: Observable<Driver[]>;

  constructor(private driverService: DriverService,private router:Router) {
  }

  ngOnInit(): void { 
    this.drivers$ = this.driverService.getDrivers();
  }

}
