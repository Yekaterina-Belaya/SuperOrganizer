import {Pipe, PipeTransform} from "@angular/core";
import moment, {Moment} from "moment";

@Pipe({
  standalone: true,
  name: 'moment',
  pure: false
})
export class MomentPipe implements PipeTransform {
  transform( m:  Moment | null, format: string = 'MMMM YYYY'): string {
    return m ? m.format(format) : '';
  }
}
