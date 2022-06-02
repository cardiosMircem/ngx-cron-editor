import { Component, OnInit, ViewChild } from '@angular/core';
import { CronOptions } from 'cron-editor';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public cronValue = '0 0 1/1 * *';

  public cronOptions: CronOptions = {
    hideMinutesTab: false,
    hideHourlyTab: false,
    hideDailyTab: false,
    hideWeeklyTab: false,
    hideMonthlyTab: false,
    hideYearlyTab: false,
    hideAdvancedTab: false,
    hideSpecificWeekDayTab: false,
    hideSpecificMonthWeekTab: false,

    use24HourTime: true,
    hideSeconds: false,

    cronFlavor: 'standard'
  };

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.addLangs(['en']);
    this.translate.setDefaultLang('en');
  }

  seeCron(ev: string): void {
    this.cronValue = ev;
  }
}
