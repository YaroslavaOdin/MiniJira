import { Component, OnInit, Input } from '@angular/core';
import { Task, statusTask } from '../../models/task';
import { TaskService } from '../services/task.service';
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Input() task?: Task;

  public statusTask: string[] = Object.keys(statusTask);
  public selectedStatus:string = '';

  constructor(private taskService: TaskService) {

  }

  ngOnInit(): void {
  }

  saveChange(task:Task):void {
    this.taskService.updateTask(task);
  }
}
