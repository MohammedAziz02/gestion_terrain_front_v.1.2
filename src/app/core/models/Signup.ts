export class Signup {
    private _firstName: string;
    private _lastName: string;
    private _phonenumber: string;
    private _normalemail: string;
    private _academicemail: string;
    private _password: string;
    private _picture: any;
    private _role: string;
    private _confirmPassword: string;
    private _grade: string; // Added grade property

    constructor(firstName: string, lastName: string, phonenumber: string, normalemail: string, academicemail: string, password: string, confirmpassword : string, picture: string, role: string , grade: string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._phonenumber = phonenumber;
        this._normalemail = normalemail;
        this._academicemail = academicemail;
        this._password = password;
        this._picture = picture;
        this._role = role;
        this._confirmPassword = confirmpassword;
        this._grade = grade; // Initialized grade property in constructor
    }

    // Getters
    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    get phonenumber(): string {
        return this._phonenumber;
    }

    get normalemail(): string {
        return this._normalemail;
    }

    get academicemail(): string {
        return this._academicemail;
    }

    get password(): string {
        return this._password;
    }

    get picture(): any {
        return this._picture;
    }

    get role(): string {
        return this._role;
    }

    // Setters
    set firstName(firstName: string) {
        this._firstName = firstName;
    }

    set lastName(lastName: string) {
        this._lastName = lastName;
    }

    set phonenumber(phonenumber: string) {
        this._phonenumber = phonenumber;
    }

    set normalemail(normalemail: string) {
        this._normalemail = normalemail;
    }

    set academicemail(academicemail: string) {
        this._academicemail = academicemail;
    }

    set password(password: string) {
        this._password = password;
    }

    set picture(picture: any) {
        this._picture = picture;
    }

    set role(role: string) {
        this._role = role;
    }

    get confirmPassword(): string {
        return this._confirmPassword;
    }

    set confirmPassword(confirmPassword: string) {
        this._confirmPassword = confirmPassword;
    }

     // Getters and Setters for grade property
     get grade(): string {
        return this._grade;
    }

    set grade(grade: string) {
        this._grade = grade;
    }
}
