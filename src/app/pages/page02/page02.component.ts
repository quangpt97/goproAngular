import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-page02',
  templateUrl: './page02.component.html',
  styleUrls: ['./page02.component.scss']
})
export class Page02Component implements OnInit {
  // pageTitle="シフト希望を募集";
  constructor(translate: TranslateService) {
    translate.setDefaultLang('jp');
    translate.use('jp');
  }

  ngOnInit() {
  }

}
