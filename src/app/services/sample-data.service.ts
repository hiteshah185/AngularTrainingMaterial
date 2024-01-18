import { Injectable } from '@angular/core';
import { Employee } from '../entity/employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleDataService {
  private mockDataUrl = 'assets/data.json'

  constructor(
    private _http: HttpClient
  ) { }

  getMockData(): Observable<Employee[]> {
    return this._http.get<Employee[]>(this.mockDataUrl);
  }

  private employeeList: Employee[] = [
    {
      firstName: 'Lavanya',
      lastName: 'MS',
      email: 'lavanayams@example.in',
      phoneNumber: 1234567890,
      age: 25,
      teamName: 'FM',
      employeeType: 'Full-Time',
      isActive: true,
    },
    {
      firstName: 'Kevin',
      lastName: 'Alex',
      email: 'kevinalex@example.com',
      phoneNumber: 9876543210,
      age: 24,
      teamName: 'CMS',
      employeeType: 'Contractor',
      isActive: false,
    },
    {
      firstName: 'Alan',
      lastName: 'RS',
      email: 'alanrs@example.in',
      phoneNumber: 2222222222,
      age: 22,
      teamName: 'FM',
      employeeType: 'Full-Time',
      isActive: true,
    },
    {
      firstName: 'Hitesh',
      lastName: 'A H',
      email: 'hiteshah@example.in',
      phoneNumber: 9090987654,
      age: 25,
      teamName: 'FM',
      employeeType: 'Full-Time',
      isActive: true,
    },]

  create(newEmployee: Employee): Employee[] {
    this.employeeList = [...this.employeeList, newEmployee];
    return this.employeeList;
  }

  findAll(): Employee[] {
    return this.getItem<Employee>(this.employeeList);
  }

  findOne(name: string): Employee | undefined {
    return this.employeeList.find((emp) => emp.firstName === name);
  }


  remove(name: string) {
    let deletedEmployee: Employee | undefined = this.employeeList.find((emp) => { emp.firstName === name });
    if (deletedEmployee != undefined) {
      const index: number = this.employeeList.indexOf(deletedEmployee);
      this.employeeList.splice(index, 1);
    }
  }

  getItem<Type>(items: Type[]): Type[] {
    return (new Array<Type>()).concat(items);
  }


}
