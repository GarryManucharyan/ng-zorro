import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzFormModule } from 'ng-zorro-antd/form';

import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    NzDatePickerModule,
    NzTableModule,
    NzButtonModule,
    NzSelectModule,
    NzRadioModule,
    NzFormModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
