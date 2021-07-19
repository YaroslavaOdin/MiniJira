import { Injectable } from '@angular/core';
import { Task, statusTask } from './task';
import { TASKS } from './data-task';
 
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public TASKS:Task[] = TASKS;

  getTask():Task[] {
    console.log(TASKS);
    return TASKS;
  }

  addTask(name:string, description:string, person?:string): void{
    let newTask:Task = { name: name, status: statusTask.Backlog, assignedPerson: person, description: description, timeCreation: new Date() }
    TASKS.push(newTask);
  }

  removeTask(task:Task) {
    TASKS.splice(TASKS.indexOf(task), 1);
  }

}
