export class UserReservationDate {
    private academicEmail: string;
    private terrain: string;
    private startDate: Date;
    private endDate: Date;

    constructor(academicEmail: string, terrain: string, startDate: Date, endDate: Date) {
        this.academicEmail = academicEmail;
        this.terrain = terrain;
        this.startDate = startDate;
        this.endDate = endDate;
    }

  
}
