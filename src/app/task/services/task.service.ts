import { Injectable } from '@angular/core';
import { Task, statusTask } from '../../models/task';
import { TASKS } from '../../models/data-task';
import { BehaviorSubject } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private TASKS:Task[] = [];
  private _tasks$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
  public tasks$ = this._tasks$.asObservable();

  constructor() { 
    let storageTask = this.getTasks();
    this._tasks$.next(storageTask);
    if (storageTask === []) {
      this.putTasksInStorage(TASKS);
    }
  }

  getTasks():Task[] {
    let tasksString: string | null = localStorage.getItem('tasks');
    if (tasksString) {
      const tasks = JSON.parse(tasksString);
      return tasks;
    }
    return [];
  }

  addTask(name:string, description:string, person?:string): void {
    const tasks = this.getTasks();
    const newTask:Task = { id: this.getIdForNewTask(), name: name, status: statusTask.Backlog, assignedPerson: person, description: description, timeCreation: new Date() }
    tasks.push(newTask);
    this.putTasksInStorage(tasks);
    this._tasks$.next(tasks);
  }

  getIdForNewTask():number {
    let id:number = 1;
    if (this.TASKS.length) {
      id = this.TASKS[this.TASKS.length - 1].id + 1;
    } 
    return id;
  }

  removeTask(task:Task) {
    this.TASKS.splice(this.TASKS.indexOf(task), 1);
    this.putTasksInStorage(this.TASKS);
    this._tasks$.next(this.TASKS);
  }

  putTasksInStorage(tasks:Task[]):void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  updateTask(task: Task): void {
    const taskIndex = this.TASKS.findIndex(item => item.id == task.id);
    this.TASKS[taskIndex] = task;
    this.putTasksInStorage(this.TASKS);
    this._tasks$.next(this.TASKS);
  }
}
