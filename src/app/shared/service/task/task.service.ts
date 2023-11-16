import { Injectable } from '@angular/core';

import Task from '../../model/Task';
import User from '../../model/User';
import { UserApiService } from '../api/user-api.service';
import Group from '../../model/Group';
import { GroupApiService } from '../api/group-api.service';

@Injectable({
  providedIn: 'root'
})
export default class TaskService {
    
  constructor( private userApi:UserApiService, private groupApi:GroupApiService) { }

  registerTask(task: Task, Destiny: User | Group
  ): Task {
    Destiny.addTask(task);
    this.updateTaskInAuthor(Destiny);
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

  updateTaskInAuthor(destiny: User | Group){
    if(destiny instanceof  User){
      this.userApi.update(destiny);
    }
    else{
      this.groupApi.update(destiny);
    }
  }
}
