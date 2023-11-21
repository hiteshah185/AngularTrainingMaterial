import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/entity/employee';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  @Input() item!: Employee;

}
