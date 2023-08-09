import { Injectable } from '@angular/core';
import { BaseService } from '../utils/BaseService';
import { ReservationDto } from '../models/ReservationDto';
import { httpOptionsJson } from '../constants/constantes';
import { URL_API } from '../constants/constantes';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, of, switchMap } from 'rxjs';

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


}
