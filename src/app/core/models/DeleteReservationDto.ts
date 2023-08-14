export class DeleteReservationDto {
    private dateofmatch: Date;
    private nameofterrain: string;
  

    constructor(date: Date, nameofterrain: string) {
        this.dateofmatch = date;
        this.nameofterrain = nameofterrain;
     
    }

    // Getter and Setter for 'date'
    get date(): Date {
        return this.dateofmatch;
    }

    set date(value: Date) {
        this.dateofmatch = value;
    }

    // Getter and Setter for 'nameofterrain'
    get nameofterrain1(): string {
        return this.nameofterrain;
    }

    set nameofterrain1(value: string) {
        this.nameofterrain = value;
    }


}
