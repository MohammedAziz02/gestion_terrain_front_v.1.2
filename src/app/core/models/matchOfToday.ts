export class MatchOfToday{
    public today00 : Date;
    public today23 : Date;
    public terrainame : string;
    constructor(today00 : Date,today23:Date,terrainame : string){
        this.today00 = today00;
        this.today23 = today23;
        this.terrainame = terrainame;
    }
}