import { Component, Input, forwardRef } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
	AbstractControl,
	ControlValueAccessor,
	NG_VALIDATORS,
	NG_VALUE_ACCESSOR,
	NonNullableFormBuilder,
	ReactiveFormsModule,
	ValidationErrors,
	Validator,
	Validators
} from '@angular/forms';


@Component({
  selector: 'app-person-data-advanced-with-value-accessor',
  standalone:true,
  imports:[ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './person-data-advanced-with-value-accessor.component.html',
  styleUrls: ['./person-data-advanced-with-value-accessor.component.scss'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>PersonDataAdvancedWithValueAccessorComponent),
      multi:true
    },
    {
      provide:NG_VALIDATORS,
      useExisting:forwardRef(()=>PersonDataAdvancedWithValueAccessorComponent),
      multi:true
    }
  ]
})
export class PersonDataAdvancedWithValueAccessorComponent implements ControlValueAccessor,Validator{
  @Input({required:true}) title ='';
  constructor(private _formBuilder:NonNullableFormBuilder ){
    this.childFormGroup.valueChanges.subscribe(()=>{
      const value = this.childFormGroup.value;
      this._onChanged(value);
      this._onTouch(value);
    })
  }
  private _onChanged: Function = (_value: { name: string; rating: number }) => {};
	private _onTouch: Function = (_value: { name: string; rating: number }) => {};

  childFormGroup = this._formBuilder.group({
    names:this._formBuilder.control('',{validators:[Validators.required]}),
    lastName:this._formBuilder.control('',{validators:[Validators.required]})
  });

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
      return this.childFormGroup.valid ? null : {personData:true};
  }
  registerOnValidatorChange(fn: () => void): void {
      this._onChanged=fn;
  }
  writeValue(obj: any): void {
      if(obj){
        this.childFormGroup.setValue(obj);
      }
  }
  registerOnChange(fn: any): void {
      this._onChanged= fn;
  }
  registerOnTouched(fn: any): void {
      this._onTouch = fn;
  }
  setDisabledState(isDisabled: boolean): void {
      isDisabled ? this.childFormGroup.disable() : this.childFormGroup.enable() ;
  }


}
