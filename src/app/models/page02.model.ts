import {FormControl, FormGroup, FormArray} from '@angular/forms';
import {Page03ItemsInterface} from './page03.model';

export interface Page02ItemInterface01 {
  itemDate01: string;
  select01: string;
  select02: string;
  reason: string;
}

export interface Page02ItemInterface02 {
  itemDate02: string;
  select03: string;
  otherReason: string;
}

export interface Page02ItemInterface03 {
  itemDate03: string;
}

export interface Page02ItemInterface04 {
  itemDate04: string;
  select04: string;
  reason04: string;
  itemCheck: boolean;

}

export interface Page02ItemInterface05 {
  startDate: string;
  select05: string;
  endDate: string;
  select06: string;
  otherReason05: string;
}

export interface Page02Interface {
  item01: Page02ItemInterface01[];
  item02: Page02ItemInterface02[];
  item03: Page02ItemInterface03[];
  item04: Page02ItemInterface04[];
  item05: Page02ItemInterface05[];
}


export class Page02Model implements Page02Interface {
  item01 = [];
  item02 = [];
  item03 = [];
  item04 = [];
  item05 = [];
  formGroup01: FormGroup;
  formGroup02: FormGroup;
  formGroup03: FormGroup;
  formGroup04: FormGroup;
  formGroup05: FormGroup;

  constructor(value?: Page02Interface) {
    if (value) {
      Object.keys(value).map(item => {
        this[item] = value[item];
      });
    }

    this._createForm();
  }

  get formValue01() {
    return this.formGroup01.value;
  }

  get formValue02() {
    return this.formGroup02.value;
  }

  get formValue03() {
    return this.formGroup03.value;
  }

  get formValue04() {
    return this.formGroup04.value;
  }

  get formValue05() {
    return this.formGroup05.value;
  }


  private _createForm() {
    this.formGroup01 = new FormGroup({
      item01: new FormArray([])
    });
    this.formGroup02 = new FormGroup({
      item02: new FormArray([])
    });
    this.formGroup03 = new FormGroup({
      item03: new FormArray([])
    });
    this.formGroup04 = new FormGroup({
      item04: new FormArray([])
    });
    this.formGroup05 = new FormGroup({
      item05: new FormArray([])
    });
  }

  // get formArray() {
  //   return this.formGroup.get('items') as FormArray;
  // }

  get formArray01() {
    return this.formGroup01.get('item01') as FormArray;
  }

  get formArray02() {
    return this.formGroup02.get('item02') as FormArray;
  }

  get formArray03() {
    return this.formGroup03.get('item03') as FormArray;
  }

  get formArray04() {
    return this.formGroup04.get('item04') as FormArray;
  }

  get formArray05() {
    return this.formGroup05.get('item05') as FormArray;
  }

  // get formValue() {
  //   return this.formGroup.value;
  // }

  addItem01(value01 ?: Page02ItemInterface01) {
    const formArray01 = this.formGroup01.get('item01') as FormArray;
    formArray01.push(this._createFormGroup01(value01));
  }

  addItem02(value02 ?: Page02ItemInterface02) {
    const formArray02 = this.formGroup02.get('item02') as FormArray;
    formArray02.push(this._createFormGroup02(value02));
  }

  addItem03(value03 ?: Page02ItemInterface03) {
    const formArray03 = this.formGroup03.get('item03') as FormArray;
    formArray03.push(this._createFormGroup03(value03));
  }

  addItem04(value04 ?: Page02ItemInterface04) {
    const formArray04 = this.formGroup04.get('item04') as FormArray;
    formArray04.push(this._createFormGroup04(value04));
  }

  addItem05(value05 ?: Page02ItemInterface05) {
    const formArray05 = this.formGroup05.get('item05') as FormArray;
    formArray05.push(this._createFormGroup05(value05));
  }

  private _createFormGroup01(value01?: Page02ItemInterface01) {
    return new FormGroup({
      itemDate01: new FormControl(value01 ? value01.itemDate01 : ''),
      select01: new FormControl(value01 ? value01.select01 : ''),
      select02: new FormControl(value01 ? value01.select02 : ''),
      reason: new FormControl(value01 ? value01.reason : '')
    });
  }

  private _createFormGroup02(value02?: Page02ItemInterface02) {
    return new FormGroup({
      itemDate02: new FormControl(value02 ? value02.itemDate02 : ''),
      select03: new FormControl(value02 ? value02.select03 : ''),
      otherReason: new FormControl(value02 ? value02.otherReason : '')
    });

  }

  private _createFormGroup03(value03?: Page02ItemInterface03) {
    return new FormGroup({
      itemDate03: new FormControl(value03 ? value03.itemDate03 : ''),
    });

  }

  private _createFormGroup04(value04?: Page02ItemInterface04) {
    return new FormGroup({
      itemDate04: new FormControl(value04 ? value04.itemDate04 : ''),
      itemCheck: new FormControl(value04 ? value04 : true),
      select04: new FormControl(value04 ? value04.select04 : ''),
      reason04: new FormControl(value04 ? value04.reason04 : '')
    });

  }

  private _createFormGroup05(value05?: Page02ItemInterface05) {
    return new FormGroup({
      startDate: new FormControl(value05 ? value05.startDate : ''),
      select05: new FormControl(value05 ? value05.select05 : ''),
      endDate: new FormControl(value05 ? value05.endDate : ''),
      select06: new FormControl(value05 ? value05.select06 : ''),
      otherReason05: new FormControl(value05 ? value05.otherReason05 : '')
    });

  }
}

