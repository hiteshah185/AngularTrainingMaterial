import { Injectable } from '@angular/core';
import { Employee } from '../entity/employee';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class SampleDataService {
  private mockDataUrl = 'assets/data.json'

  constructor(
    private _http: HttpClient,
    private _notificationService: NotificationService
  ) { }

  getMockData(): Observable<Employee[]> {
    return this._http.get<Employee[]>(this.mockDataUrl)
      .pipe(
        tap(data => { console.log('All:', JSON.stringify(data)) }),
        catchError(this.handleError)
      );
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

  handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage: string = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage += `An error occurred: ${err.error.message}`
    } else {
      errorMessage += `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    this._notificationService.error(errorMessage);
    return throwError(() => errorMessage);
  }


}
