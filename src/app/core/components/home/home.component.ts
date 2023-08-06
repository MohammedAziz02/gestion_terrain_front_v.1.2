import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isCollapsed=true;
  constructor(){
    console.log("home is rendered constructor");
  }

  ngOnInit(){
    console.log("home is rendered ngOnInit");
  }
}
