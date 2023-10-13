import { Component } from '@angular/core';

import Task from '../../shared/model/Task';
import TASKS from '../../shared/model/TASKS';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})

export class CreateTaskComponent {
  private __titleTask: string = '';
  private __descriptionTask: string = '';
  private __imageLinkTask: string = '';

  set titleTask(s: string) {
    this.__titleTask = s;
  }

  set descriptionTask(s: string) {
    this.__descriptionTask = s;
  }

  set linkImageTask(s: string) {
    this.__imageLinkTask = s;
  }
  createTask(): void {
    const newTask: Task = new Task(this.__titleTask, this.__descriptionTask, this.__imageLinkTask);

    TASKS.push(newTask);
  }
}