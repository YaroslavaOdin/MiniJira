import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component'; 
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component'; 

@NgModule({
  declarations: [
    TaskListComponent,
    TaskDetailComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    TaskListComponent
  ]
})
export class TaskModule { }
