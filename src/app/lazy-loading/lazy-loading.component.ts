import { Component } from '@angular/core';
import { Employee } from '../entity/employee';
import { SampleDataService } from '../services/sample-data.service';
import {Observable, of} from 'rxjs'
@Component({
  selector: 'app-lazy-loading',
  templateUrl: './lazy-loading.component.html',
  styleUrls: ['./lazy-loading.component.scss']
})
export class LazyLoadingComponent {
constructor(
  private dataService: SampleDataService
){}
value:number=12333.2222;
  userList$: Observable<Employee[]> = of(this.dataService.findAll());

}
