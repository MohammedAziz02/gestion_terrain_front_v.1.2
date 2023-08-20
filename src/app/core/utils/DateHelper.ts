export class DateHelper {

  public static generateDateList(): { day: string, dates: Date[] }[] {
    const daysOfWeek = ['Sunday ', 'Monday ', 'Tuesday ', 'Wednesday ', 'Thursday ', 'Friday ', 'Saturday '];
    const today = new Date();

    const futureDate = new Date(today);
    // console.log("day",futureDate.getDay());
    futureDate.setDate(futureDate.getDate() + 1); // Incrémente la date de 1 jours
    // console.log("day",futureDate.getDay());
    const dateList: { day: string, dates: Date[] }[] = [];

    const firstDayDates: Date[] = [];
    const secondDayDates: Date[] = [];

    for (let hour = 15; hour <= 24; hour++) {
      const date = new Date(futureDate);
      date.setHours(hour, 0, 0, 0);
      firstDayDates.push(date);
    }

    futureDate.setDate(futureDate.getDate() + 1);
    // console.log("day",futureDate.getDay());

    for (let hour = 15; hour < 25; hour++) {
      const date = new Date(futureDate);
      date.setHours(hour, 0, 0, 0);
      secondDayDates.push(date);
    }

    // console.log("day 1",daysOfWeek[futureDate.getDay() - 1] , "day 2",daysOfWeek[futureDate.getDay()],futureDate.getDay());

    if (futureDate.getDay() == 0) {
      dateList.push({ day: daysOfWeek[6], dates: firstDayDates });
      dateList.push({ day: daysOfWeek[0], dates: secondDayDates });
    } else {
      dateList.push({ day: daysOfWeek[futureDate.getDay() - 1], dates: firstDayDates });
      dateList.push({ day: daysOfWeek[futureDate.getDay()], dates: secondDayDates });
    }


    return dateList;
  }




  static formatDateRange(date: Date): string {
    const startTime = this.formatTime(date.getHours(), date.getMinutes());
    const endTime = this.formatTime(date.getHours() + 1, date.getMinutes());
    return `${startTime} - ${endTime}`;
  }

  static formatTime(hours: number, minutes: number): string {
    const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    if (hours == 24) {
      return `00:${formattedMinutes}`;
    }
    return `${formattedHours}:${formattedMinutes}`;
  }

  static formatDate(date: Date) {
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  static formatDateto00_00_00(date: Date): Date {
    const zeroedDate = new Date(date);
    zeroedDate.setHours(0, 0, 0, 0);
    return zeroedDate;
  }
  static formatDateto23_59_59(date: Date): Date {
    const zeroedDate = new Date(date);
    zeroedDate.setHours(23, 59, 59, 0);
    return zeroedDate;
  }

  static tomorrowDate(): Date {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)
    return tomorrow;
  }

  static afterTomorrowDate(): Date {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 2)
    return tomorrow;
  }

}