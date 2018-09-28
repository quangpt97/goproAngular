import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Page01Model} from '../../models/page01.model';
import flatpickr from 'flatpickr';

@Component({
  selector: 'app-page01',
  templateUrl: './page01.component.html',
  styleUrls: ['./page01.component.scss']
})
export class Page01Component implements OnInit, AfterViewInit {
  // pageTitle = 'シフト希望を募集';
  page01Form: Page01Model;
  timePicker: Date = null;

  constructor(translate: TranslateService) {
    translate.setDefaultLang('jp');
    // translate.use('vi');
  }

  private _initForm() {
    // get data
    this.page01Form = new Page01Model();

    this.page01Form.createForm();
  }

  ngOnInit() {
    this._initForm();

  }

  submitForm() {

    // put data
    console.log(this.page01Form.formValue);
  }

  ngAfterViewInit(): void {
    flatpickr('.date-picker', {
      dateFormat: 'Y-m'
    });
    flatpickr('.date-picker-day', {
      dateFormat: 'Y-m-d'
    });
    flatpickr('.date-picker-time', {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
      time_24hr: true
    });
  }
}
