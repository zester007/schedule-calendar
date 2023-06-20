import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }


  getTime(date: any) {
    date = new Date(date);
    let hour: any = date.getHours();
    let minute: any = date.getMinutes();
    let timingOfDay = "";
    minute = this.checkLength(minute);
    if (hour === 0) {
      hour = 12;
      timingOfDay = "AM";
    } else if (hour === 12) {
      timingOfDay = "PM";
    } else if (hour > 12) {
      hour = hour % 12;
      timingOfDay = "PM";
    } else {
      timingOfDay = "AM";
    }
    return {
      hour,
      minute,
      timingOfDay
    };
  }

  checkLength(value: number) {
    if (value < 10) {
      return "0" + value;
    }
    return value;
  }
}
