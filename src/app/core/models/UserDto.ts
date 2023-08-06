export class UserDto  {
    private _id: number;
    private _firstname: string;
    private _lastname: string;
    private _phonenumber: string;
    private _normalemail: string;
    private _academicemail: string;
    private _picture: string;
    private _role: string;
    private _grade: string; // Nouveau champ "grade"

    constructor(data: any) {
        this._academicemail = data.academicemail;
        this._firstname = data.firstName;
        this._id = data.id;
        this._lastname = data.lastName;
        this._normalemail = data.normalemail;
        this._phonenumber = data.phonenumber;
        this._picture = data.picture;
        this._role = data.role;
        this._grade = data.grade; // Initialisation du champ "grade" dans le constructeur
      }

    // Getters
    public get id(): number {
        return this._id;
    }

    public get firstName(): string {
        return this._firstname;
    }

    public get lastName(): string {
        return this._lastname;
    }

    public get phoneNumber(): string {
        return this._phonenumber;
    }

    public get normalEmail(): string {
        return this._normalemail;
    }

    public get academicEmail(): string {
        return this._academicemail;
    }

    public get picture(): string {
        return this._picture;
    }

    public get role(): string {
        return this._role;
    }

    // Setters
    public set id(id: number) {
        this._id = id;
    }

    public set firstName(firstName: string) {
        this._firstname = firstName;
    }

    public set lastName(lastName: string) {
        this._lastname = lastName;
    }

    public set phoneNumber(phoneNumber: string) {
        this._phonenumber = phoneNumber;
    }

    public set normalEmail(normalEmail: string) {
        this._normalemail = normalEmail;
    }

    public set academicEmail(academicEmail: string) {
        this._academicemail = academicEmail;
    }

    public set picture(picture: string) {
        this._picture = picture;
    }

    public set role(role: string) {
        this._role = role;
    }

     // Getter et Setter pour le champ "grade"
     public get grade(): string {
        return this._grade;
    }

    public set grade(grade: string) {
        this._grade = grade;
    }
}
