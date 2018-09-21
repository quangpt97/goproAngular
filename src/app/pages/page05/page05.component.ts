import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-page05',
  templateUrl: './page05.component.html',
  styleUrls: ['./page05.component.scss']
})
export class Page05Component implements OnInit {
  // pageTitle="チーム設定";
  constructor(translate: TranslateService) {
    translate.setDefaultLang('jp');
    translate.use('jp');
  }

  ngOnInit() {
  }

}
