import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {
  time: any = [];

  constructor(private dateservice: DateService) { }

  ngOnInit(): void {
    // const processedTime = this.dateservice.getTime(new Date().toISOString())
    // this.time = processedTime.hour + " " + processedTime.timingOfDay
    for (let i = 0; i < 24; i++) {
      for (let j = 0; j < 60; j++) {
        const timeUnit = i < 12 ? 'AM' : 'PM';
        const displayName = i > 12 ? i % 12 : i;
        const body = {
          hours: i,
          minuites: j,
          timeUnit: timeUnit,
          displayName: displayName + " " + timeUnit
        }
        this.time.push(body);
      }

    }
    console.log(this.time)
  }


  checkIfCurrentTime(time: any) {
    const date = new Date();
    const currentHours = date.getHours();
    const currentMins = date.getMinutes();
    console.log(currentHours + ":" + currentMins)
    if (currentHours === time.hours && currentMins === time.minuites) {
      return true;
    } else {
      return false;
    }

  }

}
