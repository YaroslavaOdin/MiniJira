import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() list: any[] = [];
  @Input() name: string = '';
  @Input() itemTmpl: any;
  @Output() select = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(item: any) {
    this.select.emit(item);
  }

  remove(item: any) {
    this.list.splice(this.list.indexOf(item), 1);
    localStorage.setItem(this.name, JSON.stringify(this.list));
  }

}
