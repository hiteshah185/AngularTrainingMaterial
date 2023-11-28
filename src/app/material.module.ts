import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';

const modules = [
  MatCardModule,
  MatFormFieldModule,
  MatButtonModule,
  MatDatepickerModule,
  MatSlideToggleModule,
  MatFormFieldModule,
  MatIconModule
]


@NgModule({
  declarations: [],
  imports: [modules],
  exports: [modules]

})
export class MaterialModule { }
