import { Injectable } from '@angular/core';

import Task from '../../model/Task';
import User from '../../model/User';
import { UserApiService } from '../api/user-api.service';

@Injectable({
  providedIn: 'root'
})
export default class TaskService {
    
  constructor( private userApi:UserApiService) { }

  registerTask(task: Task, userDestiny: User
  ): Task {
    userDestiny.addTask(task);
    this.updateTaskInAuthor(userDestiny);
    return task;
  
  }

  removeTask(task: Task): void{
    const author = task.author;
    author.removeTask(task); 
  }

  editTask(
    task: Task,
    newTitleTask: string,
    newDescriptionTask: string,
    newImageLinkTask: string,
    newDateStart: Date,
    newDateFinal: Date | undefined,
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
    this.updateTaskInAuthor(task.author);
    return task;
  }

  updateTaskInAuthor(user: User){
    this.userApi.update(user);
  }
}
