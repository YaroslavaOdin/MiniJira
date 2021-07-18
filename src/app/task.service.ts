import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Task } from './task';
import { TASKS } from './data-task';
 
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  getTask(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }

  constructor() { }
}
