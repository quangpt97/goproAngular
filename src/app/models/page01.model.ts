import {FormControl, FormGroup} from '@angular/forms';


export interface Page01Interface {
  startDate: string;
  endDate: string;
  itemDate: string;
  itemTime: string;
  desc?: string;
  itemCheck: Array<number>;
}


export class Page01Model implements Page01Interface {
  desc = '';
  endDate = '';
  itemCheck = [];
  itemDate = '';
  itemTime = '';
  startDate = '';

  formGroup: FormGroup;

  constructor(value?: Page01Interface) {
    if (value) {
      Object.keys(value).map(item => {
        // if (item in this) {
        this[item] = value[item];
        // }
      });
    }
  }

  get formValue() {
    return this.formGroup.value;
  }


  createForm(value?: Page01Interface) {
    const checkValue = (name) => {
      if (value && (name in value)) {
        return value[name];
      }

      return '';
    };

    this.formGroup = new FormGroup({
      desc: new FormControl(checkValue('desc')),
      endDate: new FormControl(checkValue('endDate')),
      startDate: new FormControl(checkValue('startDate')),
      itemCheck: new FormControl(checkValue('itemCheck')),
      itemDate: new FormControl(checkValue('itemDate')),
      itemTime: new FormControl(checkValue('itemTime')),
    });
  }

}
