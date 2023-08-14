import { Injectable } from '@angular/core';
import { BaseService } from '../utils/BaseService';
import { ReservationDto } from '../models/ReservationDto';
import { httpOptionsJson } from '../constants/constantes';
import { URL_API } from '../constants/constantes';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, of, switchMap } from 'rxjs';
import { GetDatesAboutReservation } from '../models/GetDatesAboutReservation';
import { DeleteReservationDto } from '../models/DeleteReservationDto';

@Injectable({
  providedIn: 'root'
})
export class ReservationService extends BaseService {

  constructor(private httpclient: HttpClient) {
    super();
   }

   addReservation(reservation: ReservationDto){
      this.isLoading = true;
      return this.httpclient.post<ReservationDto>(URL_API + 'v1/api/reservation/', reservation,httpOptionsJson);
   }

   getAllreservationsOfothersUsers  (details : GetDatesAboutReservation){
    this.isLoading = true;
    return this.httpclient.post<Date[]>(URL_API + 'v1/api/reservation/reservationofnocurrentuser', details,httpOptionsJson);
   }

  getAllreservationOfCurrentUser(details : GetDatesAboutReservation){
    this.isLoading = true;
    return this.httpclient.post<Date[]>(URL_API + 'v1/api/reservation/reservationofcurrentuser', details,httpOptionsJson);
   }

   deleteReservation(deleteReservationDto : DeleteReservationDto){
    this.isLoading = true;
    return this.httpclient.post<Number>(URL_API + 'v1/api/reservation/deletereservation', deleteReservationDto,httpOptionsJson);
   }


}
