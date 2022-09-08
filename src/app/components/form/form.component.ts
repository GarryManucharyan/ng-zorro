import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})

export class FormComponent implements OnInit {

  public form!: FormGroup;

  title = 'antd-test';


  constructor(private i18n: NzI18nService) { }

  ngOnInit() {
    this.i18n.setLocale(en_US)
    this.form = new FormBuilder().group({
      dateOfBirth: ["", [Validators.required]],
      salutation: ["", [Validators.required]],
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      address: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      email: ["", [Validators.required]],
    })
  }

  onSubmit() {
    console.log(this.form.valid);
    alert("done")
  }

}
