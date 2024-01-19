import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/entity/employee';
import { Store, select } from '@ngrx/store';
import { EmployeeState } from '../employee-store/employee.reducers';
import { selectEmployees } from '../employee-store/employee.selectors';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent {
  employees$!: Observable<Employee[]>;
  constructor(
    private _store: Store<EmployeeState>
  ) {
    this.employees$ = this._store.pipe(select(selectEmployees));
  }

}
