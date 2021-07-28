import { Component } from '@angular/core';
import { TaskService } from './services/task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  public task?: Task;
  public tasks$ = this.taskService.tasks$;
  public selectedTask?: Task;
  public searchString: string = "";
  public subscription: any;

  constructor(private taskService: TaskService) { }

  onSelect(task: Task): void {
    this.selectedTask = task;
  }

  remove(task: Task): void {
    this.taskService.removeTask(task);
  }

  search(searchTask: any): void {
    this.searchString = searchTask.value; 
  }
}
