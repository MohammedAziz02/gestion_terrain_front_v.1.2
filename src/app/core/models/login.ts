export  class Login {
    _academicmail: string;
    _password: string;
    constructor(academicMail:string, password :string) {
        this._academicmail = academicMail; // Private property to store the academicMail
        this._password = password; // Private property to store the password
    }

    // Getter for the academicMail
    get academicMail() {
        return this._academicmail;
    }

    // Setter for the academicMail
    set academicMail(value) {
        // You can add validation or checks here if needed
        this._academicmail = value;
    }

    // Getter for the password
    get password() {
        return this._password;
    }

    // Setter for the password
    set password(value) {
        // You can add validation or checks here if needed
        this._password = value;
    }

     // toString method to customize the string representation of the Login instance
     toString() {
        return `Login: academicMail=${this._academicmail}, password=${this._password}`;
    }
}
