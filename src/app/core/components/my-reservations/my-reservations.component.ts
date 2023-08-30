import { Component } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { DateHelper } from '../../utils/DateHelper';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.css']
})
export class MyReservationsComponent {

  myReservation : any;
  // dtOptions: DataTables.Settings = {};
  // dtTrigger : Subject<any> = new Subject<any>();

  constructor(
    protected reservationService: ReservationService,
    private tokenStorageService: TokenStorageService
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.dtOptions = {
    //   pagingType: 'simple_numbers'
    // }
    console.log(this.tokenStorageService.getUser());
    this.reservationService.getMyReservations(this.tokenStorageService.getUser().email).subscribe(
      (res) => {
        console.log(res);
        this.myReservation = res;
        this.reservationService.setIsLoading(false);
        // this.dtTrigger.next(null);
      },
      (err) => {
        console.log(err);
        this.reservationService.setIsLoading(false);
      })
  }

  formatDateRange(date : string){
    const dateofmatch = new Date(date);
    return DateHelper.formatDateRange(dateofmatch);
  }

  formatDate(date : string){
    const dateofmatch = new Date(date);
    return DateHelper.formatDate(dateofmatch);
  }

}
