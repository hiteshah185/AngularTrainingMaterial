import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-error-field',
  templateUrl: './error-field.component.html',
  styleUrls: ['./error-field.component.scss'],
  host: {
    style: 'color:red;'
  }
})
export class ErrorFieldComponent {

  @Input() control!: FormControl | AbstractControl;
  @Input() errorMessage!: Object;
  constructor(
    public formDirective: FormGroupDirective
  ) { }
  OnInit(){
    
  }
}
