import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import { statusTask } from '../statusTask';
import { assignedPerson } from '../assignedPerson'; 
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Input() task: Task | undefined;

  public statusTask: string[] = Object.keys(statusTask);
  public personTask: string[] = Object.keys(assignedPerson);
  public selectedStatus?:string = '';
  public selectedPerson?:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
