import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeRoutingModule } from './employee.routing';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { StoreModule } from '@ngrx/store';
import { employeeFeatureKey, reducer } from './employee-store/employee.reducers';

const childComponents = [
  EmployeeHomeComponent,
  ViewEmployeeComponent,
  AddEmployeeComponent]

@NgModule({
  declarations: [
    childComponents
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    StoreModule.forFeature(employeeFeatureKey, reducer),
  ],
  exports: [
    childComponents
  ],
  providers: []
})
export class EmployeeModule { }
