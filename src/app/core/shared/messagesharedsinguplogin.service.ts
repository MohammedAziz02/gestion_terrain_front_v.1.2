import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesharedsinguploginService {

  constructor() { }
  private message: string = '';

  setMessage(message: string): void {
    this.message = message;
  }

  getMessage(): string {
    const message = this.message;
    this.message = ''; // Clear the message once retrieved
    return message;
  }
}
