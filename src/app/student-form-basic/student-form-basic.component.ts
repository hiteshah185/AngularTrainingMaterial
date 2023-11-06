import { Component, inject ,OnInit} from '@angular/core';
import { FormArray, FormBuilder,Validators,ReactiveFormsModule } from '@angular/forms';
import { EmailValidatorService } from '../Custom-Validators/email-validator.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PageAnalytics } from '../Custom-Decorators/page-analytics';

@Component({
  selector: 'app-student-form-basic',
  standalone:true,
  imports:[
    MatCardModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    ReactiveFormsModule],
    templateUrl: './student-form-basic.component.html',
    styleUrls: ['./student-form-basic.component.scss']
  })
@PageAnalytics('Basic Student Form')
export class StudentFormBasicComponent implements OnInit{
  protected displayName:string = "Vijay";
  private _formBuilder = inject(FormBuilder);
  //Basic FormGroup Example
  ngOnInit(): void {
    this.setFormValue();

  }

  mySchoolForm = this._formBuilder.group({
    studentName:['',{Validators:[Validators.required,Validators.minLength(3)]}],
    className:[''],
    rollNo:[''],
    email:['',{Validators:[Validators.email,EmailValidatorService.required()]}],
    hasScholarship:[true,Validators.required],
    fatherData:this._formBuilder.group({
      name:['',Validators.required],
      contactNumber:['',{Validators:[Validators.required,Validators.maxLength(10)]}]
    }),
    motherData:this._formBuilder.group({
      name:['',{Validators:[Validators.required,Validators]}],
      contactNumber:['',{Validators:[Validators.required,Validators.maxLength(10)]}]
    }),
    subjects:this._formBuilder.array([])
   
  });

  setFormValue(){

  }

  get subjects():FormArray{
    return this.mySchoolForm.get('subjects') as FormArray;
  }

  addSubject(){
    const newSubject = this._formBuilder.group({
      subjectName:['',{Validators:[Validators.required,Validators.maxLength(20)]}],
      marks:['',{Validators:[Validators.required,Validators.min(20)]}],
      attendance:['',{Validators:[Validators.required,Validators.min(60)]}]
    })
    this.subjects.push(newSubject);
  }
  onSaveData(){
    console.log(this.mySchoolForm.value);
  }


}
