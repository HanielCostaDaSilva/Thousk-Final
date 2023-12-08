import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskComponent } from './create-task/create-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskBoxComponent } from './task-box/task-box.component';
import { MaterialModule } from '../material/material.module';
import { ShowTaskComponent } from './show-task/show-task.component';
import { TaskWindowComponent } from './task-window/task-window.component';
import { PipesModule } from '../shared/pipes/pipes.module';


@NgModule({
  declarations: [
    CreateTaskComponent,
    EditTaskComponent,
    TaskBoxComponent,
    ShowTaskComponent,
    TaskWindowComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PipesModule

  ],
  exports: [
    CreateTaskComponent,
    EditTaskComponent,
    TaskBoxComponent,
    ShowTaskComponent,
    TaskWindowComponent
  ]
})
export class TaskModule { }
