import { Injectable } from '@angular/core';

import Task from '../../model/Task';
import User from '../../model/User';
//import { UserApiService } from '../api/user-api.service';

import { Observable } from 'rxjs';
import { UserFirestoreService } from '../api/firestore/user-firestore.service';

@Injectable({
  providedIn: 'root'
})
export default class TaskService {

  constructor(private userApi: UserFirestoreService) { }

  registerTask(task: Task, destiny: User) {
    console.log("oi")
    destiny.tasks?.push(task);
    //task.author= destiny.id;
    return this.userApi.update(destiny);
  }

  removeTask(task: Task, destiny: User): void {
    if (destiny.tasks && destiny.tasks.indexOf(task) !== -1) {
      destiny.tasks.splice(destiny.tasks.indexOf(task), 1);
    }
    this.userApi.update(destiny);

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
  ): void {
    if (task) {
      task.title = newTitleTask;
      task.description = newDescriptionTask;
      task.imageLink = newImageLinkTask;
      task.dateStart = newDateStart;
      task.dateFinal = newDateFinal;
      task.category = newCategory;
    }
    this.userApi.update(destiny);
  }
}
