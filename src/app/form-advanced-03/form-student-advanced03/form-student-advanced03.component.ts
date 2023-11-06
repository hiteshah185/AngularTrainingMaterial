import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PersonDataAdvancedWithValueAccessorComponent } from '../person-data-advanced-with-value-accessor/person-data-advanced-with-value-accessor.component';

@Component({
  selector: 'app-form-student-advanced03',
  standalone:true,
  imports:[
    MatCardModule,
		MatFormFieldModule,
		MatButtonModule,
		MatSlideToggleModule,
		ReactiveFormsModule,
		PersonDataAdvancedWithValueAccessorComponent
  ],
  templateUrl: './form-student-advanced03.component.html',
  styleUrls: ['./form-student-advanced03.component.scss']
})
export class FormStudentAdvanced03Component {
  constructor(private _formBuilder:NonNullableFormBuilder){}
  parentForm = this._formBuilder.group({
    doYouNeedLunch: this._formBuilder.control(false),
    doYouNeedTransportToHome: this._formBuilder.control(false),
    areYouFreeForWeekendClasses: this._formBuilder.control(false),
    fatherData: this._formBuilder.control(null,{validators:[Validators.required]}),
    motherData: this._formBuilder.control({value:null,disabled:true},{validators:[Validators.required]})
  })

  saveData(){
    console.log(this.parentForm.getRawValue());
  }

}
