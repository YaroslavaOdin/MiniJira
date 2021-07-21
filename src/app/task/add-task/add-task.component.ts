import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void { }

  add(name:string, description: string, person?:string) {
    if (!name || !description) { return; }
    this.taskService.addTask(name, description, person);
    
  }

}
