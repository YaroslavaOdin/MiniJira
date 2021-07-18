import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { TimeСreation } from '../date';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  public task?:Task;

  public tasks:Task[] = [];
  public tasksDescription:string[] = [];
  selectedTask?: Task;

  constructor(private taskService: TaskService ) { }

  getTask(): void {
    this.taskService.getTask()
        .subscribe(tasks => this.tasks = tasks);
  }

  ngOnInit(): void {
    this.getTask();
  }

  onSelect(task: Task): void {
    console.log(task);
    this.selectedTask = task;
  }

}
