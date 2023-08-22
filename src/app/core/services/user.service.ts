import { Injectable } from '@angular/core';
import { BaseService } from '../utils/BaseService';
import { HttpClient } from '@angular/common/http';
import { URL_API, httpOptionsmulti_form } from '../constants/constantes';
import { httpOptionsJson } from '../constants/constantes';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }


  resetPassword(email: any) {
    this.isLoading = true;
    return this.http.post(URL_API + "v1/api/user/resetpassword", email,httpOptionsJson);
  }

  verifyToken(token: any) {
    this.isLoading = true;
    return this.http.post(URL_API + "v1/api/user/verify-token", token,httpOptionsJson);
  }
}
