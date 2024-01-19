import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/entity/employee';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent {
  employees$!: Observable<Employee[]>;
  constructor(

  ) {

  }

}
