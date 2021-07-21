import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { Task, statusTask } from '../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public task?:Task;
  public statusTask: string[] = Object.keys(statusTask);
  public tasks:Task[] = [];
  public tasksDescription:string[] = [];
  public selectedTask?: Task;

  constructor(private taskService: TaskService) { }

  getTask(): void {
    this.tasks = this.taskService.getTask();
  }

  ngOnInit(): void {
    this.getTask();
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
  }

  remove(task: Task) {
    this.taskService.removeTask(task);
  }
}
