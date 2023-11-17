import { Injectable } from '@angular/core';

import Task from '../../model/Task';
import User from '../../model/User';
import { UserApiService } from '../api/user-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class TaskService {
    
  constructor( private userApi:UserApiService) { }

  registerTask(task: Task, destiny: User){
    destiny.tasks.push(task);
    return this.userApi.updateTasks(destiny);  
  }

  removeTask(task: Task, destiny:User): Observable<User>{
    if (destiny.tasks && destiny.tasks.indexOf(task) !== -1) {
      destiny.tasks.splice(destiny.tasks.indexOf(task), 1);
    }
    return this.userApi.updateTasks(destiny);  

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
  ):Observable<User> {
    if (task) {
      task.title = newTitleTask;
      task.description = newDescriptionTask;
      task.imageLink = newImageLinkTask;
      task.dateStart = newDateStart;
      task.dateFinal = newDateFinal;
      task.category = newCategory;
    }
    return this.userApi.updateTasks(destiny);  
  }
}
