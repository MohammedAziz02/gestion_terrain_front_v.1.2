import { Component } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent {

  constructor(){
    console.log("pagenotfound is rendered constructor");
  }

  ngOnInit(){
    console.log("pagenotfound is rendered ngOnInit");
  }

}
