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


  changePicture (data: any): any {
    this.isLoading = true;
    return this.httpclient.post<any>(URL_API + 'v1/api/shared/profile/changePicture', data);
  }


  // just for testing loading
  // changePicture(data: any): Observable<any> {
  //   this.isLoading = true;

  //   // Create a new Observable that wraps the httpclient.post call
  //   return new Observable<any>((observer) => {
  //     // Simulate a 5-second delay using setTimeout
  //     setTimeout(() => {
  //       this.httpclient.post<any>(URL_API + 'v1/api/shared/profile/changePicture', data)
  //         .subscribe(
  //           (response) => {
  //             this.isLoading = false;
  //             observer.next(response); // Emit the response to the observable
  //             observer.complete(); // Complete the observable
  //           },
  //           (error) => {
  //             this.isLoading = false;
  //             observer.error(error); // Emit the error to the observable
  //           }
  //         );
  //     }, 5000); // 5000 milliseconds (5 seconds)
  //   });
  // }




}
