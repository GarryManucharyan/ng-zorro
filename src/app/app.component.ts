import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';



import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  public form!: FormGroup;

  title = 'antd-test';


  constructor(private i18n: NzI18nService) { }

  ngOnInit() {
    this.i18n.setLocale(en_US)
    this.form = new FormBuilder().group({
      salutation: ["", [Validators.required]],
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      email: ["", [Validators.required]],
      dateOfBirth: ["", [Validators.required]],
      address: ["", [Validators.required]],
    })
  }

  onSubmit() {
    console.log(this.form.valid);
  }

}
