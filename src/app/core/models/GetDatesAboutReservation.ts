export class GetDatesAboutReservation {
    private academicEmail: string;
    private nameofterrain: string;
   

    constructor(academicEmail: string, nameofterrain: string) {
        this.academicEmail = academicEmail;
        this.nameofterrain = nameofterrain;
      
    }

    // Getter and Setter for 'academicEmail'
    get academicEmail1(): string {
        return this.academicEmail;
    }

    set academicEmail1(value: string) {
        this.academicEmail = value;
    }

    // Getter and Setter for 'nameofterrain'
    get nameofterrain1(): string  {
        return this.nameofterrain;
    }

    set nameofterrain1(value: string) {
        this.nameofterrain = value;
    }

}
