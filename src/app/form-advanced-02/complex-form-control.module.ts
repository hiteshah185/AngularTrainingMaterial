import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ValueAccessorExampleComponent } from './value-accessor-example/value-accessor-example.component';
import { LockInputComponent } from './lock-input/lock-input.component';



@NgModule({
  declarations: [ValueAccessorExampleComponent,
  LockInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports:[
    ValueAccessorExampleComponent
  ]
})
export class ComplexFormControlModule { }
