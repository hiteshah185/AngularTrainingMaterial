import { Employee } from "src/app/entity/employee";
import { addEmployee } from './../employee-store/empoyee.actions';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { EmployeeState } from '../employee-store/employee.reducers';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
  constructor(
    private _store: Store<EmployeeState>
  ) { }
  addEmployee(employeeName: string): void {
    let newEmployee: Employee = {
      firstName: employeeName
    }
    this._store.dispatch(addEmployee(newEmployee))
  }
}
