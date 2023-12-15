import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent {

  myTestFormGroup!: FormGroup;
  constructor(
    private _formBuilder: FormBuilder
  ) { }
  buildForm() {
    this.myTestFormGroup = this._formBuilder.group({
      email: ['', Validators.required],

    });
  }

  ngOnInit() {
    this.buildForm();
  }


  public validationMessages = {
    email: {
      required: 'Email is required',
      email: 'Please provide a valid email',
    },
  };


}
