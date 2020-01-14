import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchText: string;

  constructor(private dataService: DataService) {
    this.searchText = '';
  }

  ngOnInit() {
  }

  valueChange() {
    this.dataService.filterUser(this.searchText);
  }
}
