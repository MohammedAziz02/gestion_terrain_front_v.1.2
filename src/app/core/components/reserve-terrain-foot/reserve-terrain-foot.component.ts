import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ReservationService } from '../../services/reservation.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { DateHelper } from '../../utils/DateHelper';
import { ReservationDto } from '../../models/ReservationDto';
import { Subscription } from 'rxjs';
import { GetDatesAboutReservation } from '../../models/GetDatesAboutReservation';
import { DeleteReservationDto } from '../../models/DeleteReservationDto';
import { BaseComponent } from '../../helpers/BaseComponent';

@Component({
  selector: 'app-reserve-terrain-foot',
  templateUrl: './reserve-terrain-foot.component.html',
  styleUrls: ['./reserve-terrain-foot.component.css']
})
export class ReserveTerrainFootComponent extends BaseComponent {
 

}
