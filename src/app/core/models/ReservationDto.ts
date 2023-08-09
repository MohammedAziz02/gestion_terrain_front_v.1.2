export class ReservationDto {
    private dateofreservation: Date;
    private terrain: string;
    private againstwho: string;

    constructor(date: Date, terrain: string, againstwho: string) {
        this.dateofreservation = date;
        this.terrain = terrain;
        this.againstwho = againstwho;
    }

    // Getter and Setter for 'date'
    get date(): Date {
        return this.dateofreservation;
    }

    set date(value: Date) {
        this.dateofreservation = value;
    }

    // Getter and Setter for 'terrain'
    get terrain1(): string {
        return this.terrain;
    }

    set terrain1(value: string) {
        this.terrain = value;
    }

    // Getter and Setter for 'againstwho'
    get againstwho1(): string {
        return this.againstwho;
    }

    set againstwho1(value: string) {
        this.againstwho = value;
    }
}
