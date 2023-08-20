import { Component, Input } from '@angular/core';
import { DateHelper } from '../../utils/DateHelper';

@Component({
  selector: 'app-match-today',
  templateUrl: './match-today.component.html',
  styleUrls: ['./match-today.component.css']
})
export class MatchTodayComponent {
  @Input() matchoftoday: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("ttttttttttt",this.matchoftoday);
  }


  isnotempty(){
    if(this.matchoftoday){
      return true;
    }
    return false;
  }


  formatDate(date : any){
    const datematch = new Date(date);
    return DateHelper.formatDateRange(datematch);
  }
 
}
