import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SelectorComponent} from "./selector/selector.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {OrganizerComponent} from "./organizer/organizer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SelectorComponent, CalendarComponent, OrganizerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
