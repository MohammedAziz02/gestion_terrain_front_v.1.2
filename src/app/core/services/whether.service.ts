import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const base_url = 'https://api.open-meteo.com/v1/forecast';

@Injectable({
  providedIn: 'root',
})
export class WhetherService {
  constructor(private httpclient: HttpClient) {}

  getWheatherInformations(
    latitude: Number,
    longitude: Number
  ): Observable<any> {
    const today = new Date();
    const oneDayAfter = new Date(today);
    oneDayAfter.setDate(oneDayAfter.getDate() + 1);

    

    const start_date = oneDayAfter.toISOString().slice(0, 10);

    const twoDayAfter = new Date(oneDayAfter);
    twoDayAfter.setDate(twoDayAfter.getDate() + 2);

    const end_date = twoDayAfter.toISOString().slice(0, 10);

    console.log(start_date, end_date);

    return this.httpclient.get<any>(
      `${base_url}?latitude=${latitude}&longitude=${longitude}&timezone=Africa/Casablanca&start_date=${start_date}&end_date=${end_date}&hourly=temperature_2m`
    );
  }
}
