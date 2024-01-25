import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseHomeComponent } from '../course-home/course-home.component';
import { SharedModule } from 'src/app/Shared/shared/shared.module';
export const sharedComponents = [
  CourseHomeComponent
]

@NgModule({
  declarations: [
    sharedComponents
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    CourseRoutingModule,
    SharedModule
  ],
  exports: [
    sharedComponents
  ]
})
export class CourseModule { }
