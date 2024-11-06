import {Injectable} from "@angular/core";
import moment, { Moment } from 'moment';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: "root"
})

export class DateService {
  public date: BehaviorSubject<Moment> = new BehaviorSubject<Moment>(moment());
}
