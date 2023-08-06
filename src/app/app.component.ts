import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestion_terrain_front_v.1.1';

  constructor(){
    console.log("app is rendered constructor");
  }

  ngOnInit(){
    console.log("app is rendered ngOnInit");
  }
 
  
}
