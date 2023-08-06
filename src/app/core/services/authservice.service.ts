import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signup } from '../models/Signup';
import { Observable, map, timer } from 'rxjs';
import { URL_API } from '../constants/constantes';
import { httpOptionsJson } from '../constants/constantes';
import { Login } from '../models/login';
import { BaseService } from '../utils/BaseService';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  register(signUpRequest: Signup): Observable<any> {
    this.isLoading = true;
    return this.http.post(URL_API + 'api/auth/signup', signUpRequest, httpOptionsJson);
  }

  login(login: Login): Observable<any> {
    this.isLoading = true;
    return this.http.post(URL_API + 'api/auth/signin', login, httpOptionsJson);
  }



}
