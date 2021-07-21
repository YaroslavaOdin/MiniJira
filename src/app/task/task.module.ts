import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component'; 
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TaskComponent,
    TaskDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    TaskComponent
  ]
})
export class TaskModule { }
