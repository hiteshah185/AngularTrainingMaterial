import { NgIf } from '@angular/common';
import { Component, Input, inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ControlContainer, FormBuilder, ReactiveFormsModule,FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-person-data-advanced',
  standalone:true,
  imports:[ReactiveFormsModule,MatFormFieldModule,MatInputModule,NgIf],
  templateUrl: './person-data-advanced.component.html',
  styleUrls: ['./person-data-advanced.component.scss'],
})
export class PersonDataAdvancedComponent implements OnInit{
  @Input({required:true}) title ='';
  @Input({required:true}) controlKey ='';


  private parentContainer = inject(ControlContainer);
	formGroup!: FormGroup;


    ngOnInit():void{
     this.formGroup = this.parentFormGroup;
    }

    get parentFormGroup(){
      return this.parentContainer.control?.get(this.controlKey) as FormGroup;
    }

}
