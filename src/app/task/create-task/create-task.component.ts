import { Component } from '@angular/core';

import Task from '../../shared/model/Task';
import TASKS from '../../shared/model/TASKS';
import AuthService from '../../shared/service/auth/auth.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})

export class CreateTaskComponent {
  private __titleTask: string = '';
  private __descriptionTask: string = '';
  private __imageLinkTask: string = '';

  private __authService:AuthService = new AuthService();
  private __actualUser =this.__authService.currentUser;


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
    const newTask: Task = new Task(this.__titleTask, this.__descriptionTask, this.__imageLinkTask, this.__actualUser );

    TASKS.push(newTask);
  }
}