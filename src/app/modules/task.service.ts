import { Injectable } from '@angular/core';
import { Task, statusTask } from './task';
import { TASKS } from './data-task';
 
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public TASKS:Task[] = [];

  constructor() { 
    if(!localStorage.getItem('tasks')){
      this.putTasksInStorage(this.TASKS);
    }
  }

  getTask():Task[] {
    let tasksString: string | null = localStorage.getItem('tasks');
    if (tasksString) {
      this.TASKS = JSON.parse(tasksString);
    }
    return this.TASKS;
  }

  addTask(name:string, description:string, person?:string): void{
    let newTask:Task = { name: name, status: statusTask.Backlog, assignedPerson: person, description: description, timeCreation: new Date() }
    this.TASKS.push(newTask);
    this.putTasksInStorage(this.TASKS);
  }

  removeTask(task:Task) {
    this.TASKS.splice(this.TASKS.indexOf(task), 1);
    this.putTasksInStorage(this.TASKS);
  }

   putTasksInStorage(tasks:Task[]):void {
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }
}
