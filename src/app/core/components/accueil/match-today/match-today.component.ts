import { Component, Input, ViewChild } from '@angular/core';
import { DateHelper } from '../../../utils/DateHelper';
import { ReservationService } from '../../../services/reservation.service';
import { MatchOfToday } from '../../../models/matchOfToday';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-match-today',
  templateUrl: './match-today.component.html',
  styleUrls: ['./match-today.component.css']
})
export class MatchTodayComponent {
  // @Input() matchoftoday: any;
  matchtodaydata : any;
  
  currentDate: Date = new Date();

  constructor(private reservationService : ReservationService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("ttttttttttt",this.matchtodaydata);
    this.matchtodaydata=this.getMatchOfToday("terrain football");
  }

  getMatchOfToday(terrain : string){
    const today = new Date();
    const date00 = DateHelper.formatDateto00_00_00(today);
    const date23 = DateHelper.formatDateto23_59_59(today);
    const matchOfToday = new MatchOfToday(date00,date23,terrain);
    this.reservationService.getMatchesofToday(matchOfToday).subscribe(
      data => {
        console.log("today",data);
        this.matchtodaydata = data;
      },
      err => {
        console.log(err);
      }
    )
  }


  isnotempty(){
    if(this.matchtodaydata){
      return true;
    }
    return false;
  }


  formatDate(date : any){
    const datematch = new Date(date);
    return DateHelper.formatDateRange(datematch);
  }


  handleClick(terrain : string){
    this.getMatchOfToday(terrain);
  }


  paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

	togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}
 

  
}
