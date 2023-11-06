import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-value-accessor-example',
  templateUrl: './value-accessor-example.component.html',
  styleUrls: ['./value-accessor-example.component.scss']
})
export class ValueAccessorExampleComponent implements OnInit{
  constructor(private _formBuilder: FormBuilder){}
  myForm!: FormGroup;
ngOnInit(): void {
    this.buildForm()
}


buildForm(){
  this.myForm = this._formBuilder.group({
    itemName: new FormControl(),
    isLocked: new FormControl({value:false,disabled:false})

  })
}

onSubmit(){
  console.log(this.myForm.value);
}
}
