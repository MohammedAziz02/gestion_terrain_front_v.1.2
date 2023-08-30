import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class SweatAlertServiceService {


  constructor() { }

  showSuccess(message: string): void {

    Swal.fire({
      position: 'center',
      icon: 'success',
      text: message,
      title: 'SUCCESS',
      showConfirmButton: false,
      timer: 1500
    });
  }

  showError(message: string): void {
    Swal.fire({
      position: 'center',
      icon: 'error',
      text: message,
      title: 'Not Authenticated',
      showConfirmButton: false,
      timer: 1500
    });
  }

  showInfo(message: string): void {
    Swal.fire('Info', message, 'info');
  }

  // Ajoutez d'autres méthodes en fonction de vos besoins

  showCustom(options: SweetAlertOptions): void {
    Swal.fire(options);
  }

  showDelete(message: string): any {
    return Swal.fire({
      title: message,
      text: 'You will not be able to recover this reservation!',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    })
  }
}
