import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule ,Validators} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PersonDataAdvancedComponent } from '../person-data-advanced/person-data-advanced.component';
import { IPersonData, IStudentAdvanceForm,IPersonDataForm } from 'src/app/model/person-data.model';
import {getFormControlValueAsType} from 'src/util/form-functions';
import { PageAnalytics } from 'src/app/Custom-Decorators/page-analytics';
import { timer } from 'src/app/Custom-Decorators/timer';
import { Subscription, interval } from 'rxjs';
import { Unsubscribe } from 'src/app/Custom-Decorators/unsubscribe';

@Component({
  selector: 'app-form-student-advanced',
  templateUrl: './form-student-advanced.component.html',
  styleUrls: ['./form-student-advanced.component.scss']
})
@PageAnalytics('FormStudentAdvanced')
@Unsubscribe()
export class FormStudentAdvancedComponent {
  private _formBuilder = inject(NonNullableFormBuilder);

  mainFormGroup = this._formBuilder.group<IStudentAdvanceForm>({
    doYouNeedLunch: this._formBuilder.control(false),
    doYouNeedTransportToHome: this._formBuilder.control(false),
    areYouFreeForWeekendClasses: this._formBuilder.control(false),
    fatherData: this._formBuilder.group<IPersonDataForm>({
      names:this._formBuilder.control('',{ validators: [Validators.required] }),
      lastName: this._formBuilder.control('',{validators:[Validators.required]})
    }),
    motherData:this._formBuilder.group<IPersonDataForm>({
      names: this._formBuilder.control('',{validators:[Validators.required]}),
      lastName: this._formBuilder.control('',{validators:[Validators.required]})
    })
  });

  private dataSubscription!:Subscription;
@timer
  saveData(){
    // const data = getFormControlValueAsType<IPersonData>(this.formGroup,'dataFather');
    // console.log(data?.names);
    console.log(this.mainFormGroup.getRawValue());
    // this.dataSubscription = interval(1000).subscribe(v=>{
    //   console.log('Subs@:',v)
    // })
  }
  
}
