import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Page02Model} from '../../models/page02.model';

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

  page02Form: Page02Model;
  select01 = ['種別を選択', 'a', 'b'];
  select02 = ['終日', 'a', 'b'];
  select03 = ['種別を選択', 'a', 'b'];
  select04 = ['外勤先を選択', 'a', 'b'];
  select05 = ['終日', 'a', 'b'];
  select06 = ['終日', 'a', 'b'];
  // select01 = ['種別を選択', 'a', 'b'];
  // select01 = ['種別を選択', 'a', 'b'];

  private _initForm() {
    // get data
    this.page02Form = new Page02Model();

    // this.page03Form.createForm();
  }

  ngOnInit() {
    this._initForm();
  }

  addItem01() {
    this.page02Form.addItem01();
  }

  addItem02() {
    this.page02Form.addItem02();
  }

  addItem03() {
    this.page02Form.addItem03();
  }

  addItem04() {
    this.page02Form.addItem04();
  }

  addItem05() {
    this.page02Form.addItem05();
  }

  removeItem01(index: number) {
    this.page02Form.formArray01.removeAt(index);
  }

  removeItem02(index: number) {
    this.page02Form.formArray02.removeAt(index);
  }

  removeItem03(index: number) {
    this.page02Form.formArray03.removeAt(index);
  }

  removeItem04(index: number) {
    this.page02Form.formArray04.removeAt(index);
  }

  removeItem05(index: number) {
    this.page02Form.formArray05.removeAt(index);
  }

  submitForm() {

    // put data
    console.log(this.page02Form.formValue01);
    console.log(this.page02Form.formValue02);
    console.log(this.page02Form.formValue03);
    console.log(this.page02Form.formValue04);
    console.log(this.page02Form.formValue05);

  }

}
