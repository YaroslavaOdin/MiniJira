import { Component, OnInit, Input } from '@angular/core';
import { Task, statusTask } from '../modules/task';
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Input() task: Task | undefined;

  public statusTask: string[] = Object.keys(statusTask);
  public selectedStatus:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
