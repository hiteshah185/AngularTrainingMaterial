import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/entity/employee';
import { SampleDataService } from 'src/app/services/sample-data.service';

@Component({
  selector: 'app-search-directory',
  templateUrl: './search-directory.component.html',
  styleUrls: ['./search-directory.component.scss']
})
export class SearchDirectoryComponent implements OnInit {
  constructor(private _dataService: SampleDataService) {
    this.searchQuery='';
  }
  searchQuery!: string;
  persons!: Employee[];
  currentPerson!: Employee;

  ngOnInit() {
    this.getPersonList();
  }

  getPersonList() {
    this.persons = this._dataService.findAll();
  }
  selectPerson(item: any) {
    this.searchQuery = item.firstName;
    item.highlight = !item.highlight;
    this.currentPerson = item;
  }




}
