import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MonthWeeks } from './enums';

@Pipe({
  name: 'monthWeekDisplay'
})
export class MonthWeekDisplayPipe implements PipeTransform {
  constructor(private translateService: TranslateService) {}

  transform(monthWeekNumber: string): string {
    return this.translateService.instant(`cronEditor.lbl.${MonthWeeks[monthWeekNumber]}`);
  }
}
