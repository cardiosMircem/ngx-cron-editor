import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Months } from './enums';

@Pipe({
  name: 'monthDisplay'
})
export class MonthDisplayPipe implements PipeTransform {
  constructor(private translateService: TranslateService) {}

  transform(month: number): string {
    return this.translateService.instant(`cronEditor.lbl.months.${Months[month]}`);
  }
}
