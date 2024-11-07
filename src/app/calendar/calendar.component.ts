import {Component, OnInit} from '@angular/core';
import moment, {Moment} from "moment";
import {DateService} from "../shared/date.service";
import {MomentPipe} from "../shared/moment.pipe";

interface Day {
  value: moment.Moment,
  active: boolean,
  disabled: boolean,
  selected: boolean
}

interface Week {
  days: Day[]
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    MomentPipe
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit{

  calendar: Week[] = [];

  constructor(private dateService: DateService) {
  }

  ngOnInit() {
    this.dateService.date.subscribe(this.generate.bind(this));

  }

  generate(now: Moment) {
    const startDay = now.clone().startOf('month').startOf('week');
    const endDay = now.clone().endOf('month').endOf('week');

    const date = startDay.clone().subtract(1, 'day');

    const calendar = [];

    while (date.isBefore(endDay)) {
      calendar.push({
        days: Array(7).fill(0).map(() => {
          const value = date.add(1, 'day').clone();
          const active = moment().isSame(value, 'date');
          const disabled = !now.isSame(value, 'month');
          const selected= now.isSame(value, 'date');

          return {
            value, active, disabled, selected
          }
        })
      })
    }

    this.calendar = calendar;

    console.log(calendar)
  }

}
