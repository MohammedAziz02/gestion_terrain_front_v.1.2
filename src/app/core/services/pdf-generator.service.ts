import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root',
})
export class PdfGeneratorService {
  constructor() {}

  generateTicket(email: any, againstWho: any, terrain: any, dateMatch: Date) {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a6',
    });

    const img = new Image();
    img.src = 'assets/logo.png';

    const signature = new Image();
    signature.src = 'assets/signature1.png';

    img.onload = () => {
      // Set the background color
      doc.setFillColor('#ededed'); // Desired background color

      // Fill the entire page with the background color
      doc.rect(
        0,
        0,
        doc.internal.pageSize.getWidth(),
        doc.internal.pageSize.getHeight(),
        'F'
      );

      doc.addImage(img, 'png', 40, 5, 20, 20);

      doc.setFillColor('black');
      doc.line(10, 30, 90, 30, 'F');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(18);
      doc.setTextColor(0, 102, 204); // Dark blue
      doc.text('Match Ticket', 30, 40);

      doc.setFillColor('black');
      doc.line(10, 45, 90, 45, 'F');

      doc.setFillColor('#096dd9'); // Blue background color

      doc.rect(3, 50, 98, 50, 'F');

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(12);
      doc.setTextColor(255); // White text color

      doc.text(`- Email: ${email}`, 5, 60);
      doc.text(`- Against: ${againstWho}`, 5, 70);
      doc.text(`- Terrain: ${terrain}`, 5, 80);

      function toString(number: any, padLength: any) {
        return number.toString().padStart(padLength, '0');
      }

      function convertDate(date: Date) {
        let convertedDate =
          toString(date.getFullYear(), 4) +
          '/' +
          toString(date.getMonth() + 1, 2) +
          '/' +
          toString(date.getDate(), 2) +
          '  ' +
          toString(date.getHours(), 2) +
          ':' +
          toString(date.getMinutes(), 2) +
          ':' +
          toString(date.getSeconds(), 2);
        return convertedDate;
      }
      doc.setFont('helvetica', 'bold');

      doc.setTextColor("#ba0606"); // Red text color

      doc.text(
        `- Date match: ${convertDate(dateMatch)} -- ${
          dateMatch.getHours() + 1
        }:00:00 `,
        5,
        90
      );

      let currentDate = new Date();

      doc.setFillColor('#6b0a1a'); // Red background color
      doc.setTextColor(255); // White text color
      doc.setFont('helvetica', 'bold');
      doc.rect(5, 115, 45, 10, 'F');
      doc.text(`${convertDate(currentDate)}`, 7, 122);

      doc.setFont('helvetica', 'bold');
      doc.setTextColor(255); // Black text color
      doc.setFontSize(10);
      doc.setFillColor('#096dd9'); // Light gray background color
      doc.rect(0, 140, 200, 10, 'F');
      doc.text('Made with Love By Mohammed Aziz', 20, 146);

      doc.addImage(signature, 'png', 60, 103, 40, 40);

      doc.save(`ticket-${convertDate(currentDate)}.pdf`);
    };
  }
}
