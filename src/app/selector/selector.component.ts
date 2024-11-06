import {Component, OnInit} from '@angular/core';
import {DateService} from "../shared/date.service";

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.scss'
})
export class SelectorComponent {

  constructor(
    private dateService: DateService
  ) {
  }


}
