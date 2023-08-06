import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_API } from '../constants/constantes';
import { UserDto } from '../models/UserDto';
import { httpOptionsJson } from '../constants/constantes';
import { BaseService } from '../utils/BaseService';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseService {

  constructor(private httpclient: HttpClient) {
    super();
   }

  getProfile(academicEmail : string): any {
    this.isLoading = true;
    return this.httpclient.get<UserDto>(URL_API + 'v1/api/shared/profile/' + academicEmail,httpOptionsJson);
  }

  updateProfile(user: UserDto): any {
    this.isLoading = true;
    return this.httpclient.put<UserDto>(URL_API + 'v1/api/shared/profile/', user,httpOptionsJson);
  }





  changePassword (data: any): any {
    this.isLoading = true;
    return this.httpclient.post<any>(URL_API + 'v1/api/shared/profile/changePassword', data,httpOptionsJson);
  }




}
