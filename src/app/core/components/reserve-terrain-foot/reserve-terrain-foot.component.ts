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
import { GenericReservationComponent } from '../generic-reservation/generic-reservation.component';
import { UserReservationDate } from '../../models/UserReservationDate';


@Component({
  selector: 'app-reserve-terrain-foot',
  templateUrl: '../generic-reservation/generic-reservation.component.html',
  styleUrls: ['../generic-reservation/generic-reservation.component.css']
})

export class ReserveTerrainFootComponent extends GenericReservationComponent {
  // selectedDate: Date;
  // isreservatefirstday: boolean = false;
  // isreservatesecondday: boolean = false;
  // ngOnInit(): void {
  //   this.begin();
  //   this.verifyUserReservation();
  // }
  // verifyUserReservation(){
  //   this.isreservatefirstday = false;
  //   this.isreservatesecondday = false;
  //   const debut_frist = DateHelper.formatDateto00_00_00(DateHelper.tomorrowDate());
  //   console.log("debut_frist", debut_frist);
  //   const end_first = DateHelper.formatDateto23_59_59(DateHelper.tomorrowDate());
  //   console.log("end_first ", end_first);
  //   const x = new UserReservationDate(this.emailofloggedUser, this.selectedTerrain, debut_frist, end_first);

  //   this.reservationService.isUserReservatebetween2dates(x).subscribe(
  //     (response) => {
  //       console.log(response)
  //       if(response > 0){
  //         this.isreservatefirstday = true;
  //       }
  //     },
  //     (err) => {
  //       console.log(err);
  //     })
    
  //   const debut_second = DateHelper.formatDateto00_00_00(DateHelper.afterTomorrowDate());
  //   console.log("debut_second", debut_second);
  //   const end_second = DateHelper.formatDateto23_59_59(DateHelper.afterTomorrowDate());
  //   console.log("end_second ", end_second);
  //   const y = new UserReservationDate(this.emailofloggedUser, this.selectedTerrain, debut_second, end_second);
  //   this.reservationService.isUserReservatebetween2dates(y).subscribe(
  //     (response) => {
  //       console.log(response)
  //       if(response > 0){
  //         this.isreservatesecondday = true;
  //       }
  //     },
  //     (err) => {
  //       console.log(err);
  //     })
  //   }

  //   ifDisabled(date: Date): boolean {
  //     let day1 = DateHelper.formatDate(DateHelper.tomorrowDate());
  //     let dayoftemplate = DateHelper.formatDate(date);
  //     if (day1 === dayoftemplate && this.isreservatefirstday) {
  //       return true;
  //     }
  //     let formattedDate = DateHelper.formatDate(DateHelper.afterTomorrowDate());
  //     if (formattedDate === dayoftemplate && this.isreservatesecondday) {
  //       return true;
  //     }

  //     return false;

  //   }




  //   handleCancel(modal: NgbModalRef) {
  //     const deleteReservation = new DeleteReservationDto(
  //       this.dateToDelete,
  //       this.selectedTerrain
  //     );
  //     this.reservationService.deleteReservation(deleteReservation).subscribe(
  //       (response) => {
  
  //         this.reservationService.setIsLoading(false);
  //         console.log(response);
  //         modal.dismiss();
  //         this.loadReservedSlots();
  //         this.verifyUserReservation();
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //   }


  // openReservationModal(date: Date, content: any) {
  //   this.selectedDate = date;
  //   this.againstwho = '';
  //   this.modalRef = this.modalService.open(content);
  //   console.log('hamid', date);
  // }




  // sendReservation(modal: NgbModalRef) {
  //   if (
  //     this.selectedDate &&
  //     this.selectedTerrain &&
  //     this.againstwho.trim() !== ''
  //   ) {
      

  //     console.log('selected date :) ', this.selectedDate);
  //     // Construct the request data
  //     const reservation = new ReservationDto(
  //       this.selectedDate,
  //       this.selectedTerrain,
  //       this.againstwho
  //     );
  //     console.log(reservation);
  //     // Send the request
  //     this.reservationService.addReservation(reservation).subscribe(
  //       (response) => {
  //         console.log(response);
  //         this.reservationService.setIsLoading(false);

  //         // Close the modal
  //         modal.dismiss();
  //         this.loadReservedSlots();
  //         this.verifyUserReservation();
  //         // this.pdfgenerator.generateTicket(
  //         //   this.emailofloggedUser,
  //         //   this.againstwho,
  //         //   this.selectedTerrain,
  //         //   this.selectedDate
  //         // );
  //         console.log('saffi hadi hya');
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );


  //   }
  // }


}

