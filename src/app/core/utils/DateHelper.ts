export class DateHelper{
    public static generateDateList(): { day: string, dates: Date[] }[] {
        const daysOfWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
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
        console.log("day",futureDate.getDay());
      
        for (let hour = 15; hour < 25; hour++) {
          const date = new Date(futureDate);
          date.setHours(hour, 0, 0, 0);
          secondDayDates.push(date);
        }

        // console.log("day 1",daysOfWeek[futureDate.getDay() - 1] , "day 2",daysOfWeek[futureDate.getDay()],futureDate.getDay());

        if(futureDate.getDay() == 0){
          dateList.push({ day: daysOfWeek[6], dates: firstDayDates });
          dateList.push({ day: daysOfWeek[0], dates: secondDayDates });
        }else{
          dateList.push({ day: daysOfWeek[futureDate.getDay() - 1], dates: firstDayDates });
          dateList.push({ day: daysOfWeek[futureDate.getDay()], dates: secondDayDates });
        }
      
      
        return dateList;
      }
}