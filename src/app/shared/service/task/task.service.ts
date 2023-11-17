import { Injectable } from '@angular/core';

import Task from '../../model/Task';
import User from '../../model/User';
import { UserApiService } from '../api/user-api.service';

@Injectable({
  providedIn: 'root'
})
export default class TaskService {
    
  constructor( private userApi:UserApiService) { }

  registerTask(task: Task, destiny: User
  ): Task {
    this.updateTaskInAuthor(destiny);
    destiny.addTask(task);
    return task;
  
  }

  removeTask(task: Task, destiny:User): void{
    this.updateTaskInAuthor(destiny);
    destiny.removeTask(task); 

  }

  editTask(
    task: Task,
    newTitleTask: string,
    newDescriptionTask: string,
    newImageLinkTask: string,
    newDateStart: Date,
    newDateFinal: Date | undefined,
    destiny: User,
    newCategory: string = ''
  ): Task {
    if (task) {
      task.title = newTitleTask;
      task.description = newDescriptionTask;
      task.imageLink = newImageLinkTask;
      task.dateStart = newDateStart;
      task.dateFinal = newDateFinal;
      task.category = newCategory;
    }
    this.updateTaskInAuthor(destiny);
    return task;
  }

  updateTaskInAuthor(destiny: User){
    this.userApi.update(destiny);


  }
}
