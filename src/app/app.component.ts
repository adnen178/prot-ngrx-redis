import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    
  }
  @ViewChild('clr') clr: ElementRef;
  @ViewChild('t1') t1: ElementRef;
  @ViewChild('t2') t2: ElementRef;
  bg :string = "#c7fbea";
  theme1 :boolean = true ;
  theme2 :boolean = false ;
  changeBG(){
   this.bg = this.clr.nativeElement.value;
  }
  changeTheme(){
    if(this.t1.nativeElement.checked === true){
      this.theme1 = true;
      this.theme2 = false;
      this.bg = "#c7fbea" ;
    }
    else if(this.t2.nativeElement.checked === true){
      this.theme1 = false;
      this.theme2 = true;
      this.bg = "#c7effb" ;

    }
  }
}
