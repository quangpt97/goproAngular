import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-page04',
  templateUrl: './page04.component.html',
  styleUrls: ['./page04.component.scss']
})
export class Page04Component implements OnInit {
  // pageTitle="スキル設定";
  constructor(translate: TranslateService) {
    translate.setDefaultLang('jp');
    translate.use('jp');
  }

  ngOnInit() {
  }

}
