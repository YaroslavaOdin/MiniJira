import { Component, OnInit } from '@angular/core';
import { TaskService } from '../moduls/task.service';
import { Task, statusTask } from '../moduls/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  public task?:Task;
  public statusTask: string[] = Object.keys(statusTask);
  public tasks:Task[] = [];
  public tasksDescription:string[] = [];
  public selectedTask?: Task;

  constructor(private taskService: TaskService ) { }

  getTask(): void {
    this.tasks = this.taskService.getTask();
  }

  ngOnInit(): void {
    this.getTask();
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
  }

  add(name:string, description: string, person?:string) {
    if (!name || !description) { return; }
    this.taskService.addTask(name, description, person);
  }
}
