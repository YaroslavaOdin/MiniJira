import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public task?:Task;
  public tasks:Task[] = [];
  public selectedTask?: Task;
  public searchString: string = "";

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    this.tasks = this.taskService.getTask();
  }

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
