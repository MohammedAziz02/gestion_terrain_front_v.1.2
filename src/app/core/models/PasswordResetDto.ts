export class PasswordResetDto{
    public newPassword : string;
    public tokenPassword : string;
    constructor(tokenPassword: string, newPassword : string){
        this.newPassword = newPassword;
        this.tokenPassword = tokenPassword;
    }
}