export class DateHelper{
    public static generateDateList(): { day: string, dates: Date[] }[] {
        const daysOfWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
        const today = new Date();
        const futureDate = new Date(today);
        futureDate.setDate(futureDate.getDate() + 1); // Incrémente la date de 1 jours
      
        const dateList: { day: string, dates: Date[] }[] = [];
      
        const firstDayDates: Date[] = [];
        const secondDayDates: Date[] = [];
      
        for (let hour = 15; hour <= 24; hour++) {
          const date = new Date(futureDate);
          date.setHours(hour, 0, 0, 0);
          firstDayDates.push(date);
        }
      
        futureDate.setDate(futureDate.getDate() + 1);
      
        for (let hour = 15; hour < 25; hour++) {
          const date = new Date(futureDate);
          date.setHours(hour, 0, 0, 0);
          secondDayDates.push(date);
        }
      
        dateList.push({ day: daysOfWeek[futureDate.getDay() - 1], dates: firstDayDates });
        dateList.push({ day: daysOfWeek[futureDate.getDay()], dates: secondDayDates });
      
        return dateList;
      }
}