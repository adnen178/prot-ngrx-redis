import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class Navbar1Component implements OnInit {

  constructor() { }
  @Input() title :string ;
  ngOnInit(): void {
  }

}
