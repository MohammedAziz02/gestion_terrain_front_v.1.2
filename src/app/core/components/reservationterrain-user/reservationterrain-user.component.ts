import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'; // Import NgbModal and NgbModalRef
import { DateHelper } from '../../utils/DateHelper';
import { ReservationService } from '../../services/reservation.service';
import { ReservationDto } from '../../models/ReservationDto';

@Component({
  selector: 'app-reservationterrain-user',
  templateUrl: './reservationterrain-user.component.html',
  styleUrls: ['./reservationterrain-user.component.css']
})
export class ReservationterrainUserComponent {
  dates: { day: string, dates: Date[] }[] = [];
  selectedDate: Date;
  selectedTerrain: string | null = null;
  inputValue: string = '';
  modalRef: NgbModalRef | null = null;

  constructor(private modalService: NgbModal, protected reservationService: ReservationService) { }

  ngOnInit() {
    this.dates = DateHelper.generateDateList();
  }

  openReservationModal(date: Date, content: any) {
    this.selectedDate = date;
    this.inputValue = '';
    this.selectedTerrain = null; // Reset selected terrain
    this.modalRef = this.modalService.open(content);
  }

  selectTerrain(terrainName: string) {
    this.selectedTerrain = terrainName;

  }

  sendReservation(modal: NgbModalRef) {
    if (this.selectedDate && this.selectedTerrain && this.inputValue.trim() !== '') {
      // Construct the request data


      const reservation = new ReservationDto(this.selectedDate, this.selectedTerrain, this.inputValue);

      console.log(reservation);
      // Send the request
      this.reservationService.addReservation(reservation).subscribe(
        (response) => {
          console.log(response);
          this.reservationService.setIsLoading(false);
          
          // Close the modal
          modal.dismiss();

        },
        (error) => {
          console.log(error);
        }
      );



    }
  }






  formatDateRange(date: Date): string {
    const startTime = this.formatTime(date.getHours(), date.getMinutes());
    const endTime = this.formatTime(date.getHours() + 1, date.getMinutes());
    return `${startTime} - ${endTime}`;
  }

  formatTime(hours: number, minutes: number): string {
    const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return `${formattedHours}:${formattedMinutes}`;
  }
}
