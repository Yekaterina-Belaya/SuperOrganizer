import {Component, OnInit} from '@angular/core';
import {DateService} from "../shared/date.service";
import {AsyncPipe} from "@angular/common";
import {MomentPipe} from "../shared/moment.pipe";

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [
    AsyncPipe,
    MomentPipe
  ],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.scss'
})
export class SelectorComponent {

  constructor(
    protected dateService: DateService
  ) {
  }

  flip(dir: number) {
    this.dateService.changeMonth(dir);
  }


}
