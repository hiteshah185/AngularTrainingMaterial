import { Component, Input, OnChanges,ChangeDetectionStrategy, SimpleChanges, OnInit } from '@angular/core';
import { JsonFormData,JsonFormControls } from '../@DataType/interfaces/Json.form';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss']
})
export class JsonFormComponent implements OnChanges ,OnInit{
   
  jsonData!:JsonFormData | any;
  myForm:FormGroup=this._formBuilder.group({});

  constructor(private _http: HttpClient,
    private _formBuilder: FormBuilder){}

    ngOnInit(): void {
        this.getJsonData();
        this.myForm = this.createForm(this.jsonData);
    }
  ngOnChanges(changes:SimpleChanges){
    this.getJsonData();
   
  }
  getJsonData(){
    this._http
      .get('/assets/my-form.json').subscribe(formData=>{
        //console.log(formData)
        this.jsonData = formData;
      });      
  }
  createForm(controls:JsonFormControls[]):FormGroup{
    let newForm: FormGroup =this._formBuilder.group({});
    for(const control of controls){
      const validatorsToAdd =[];
      for(const[key,value] of Object.entries(control.validators)){
        switch(key){
          case 'min':
            validatorsToAdd.push(Validators.min(value));
            break;
          case 'max':
            validatorsToAdd.push(Validators.max(value));
            break;
          case 'required':
            validatorsToAdd.push(Validators.required);
            break;
          case 'email':
            validatorsToAdd.push(Validators.email);
            break;
          case 'minLength':
            validatorsToAdd.push(Validators.minLength(value));
            break;
          case 'maxLength':
            validatorsToAdd.push(Validators.maxLength(value));
            break;
          case 'pattern':
            validatorsToAdd.push(Validators.pattern(value));
            break;
          default:
            break;
        }
      }
      newForm.addControl(control.name,this._formBuilder.control(control.value,validatorsToAdd));
    }
    return newForm;
  }
  onSubmit(){
    console.log(this.myForm.valid);
    console.log(this.myForm.getRawValue());
  }


}
