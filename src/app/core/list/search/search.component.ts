import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  searchInput(event:any) {
    this.search.emit(event.value);
  }
}
