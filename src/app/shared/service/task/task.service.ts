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

  registerTask(task: Task, destiny: User): Observable<void> {
    destiny.tasks?.push(task);
    return this.userApi.updateTasks(destiny);
  }

  removeTask(task: Task, destiny: User): Observable<void> {
    if (destiny.tasks && destiny.tasks.indexOf(task) !== -1) {
      destiny.tasks.splice(destiny.tasks.indexOf(task), 1);
    }
    return this.userApi.updateTasks(destiny);

  }
  /**
   * Edita a tarefa e envia
   * @param task 
   * @param newTitleTask 
   * @param newDescriptionTask 
   * @param newImageLinkTask 
   * @param newDateStart 
   * @param newDateFinal 
   * @param destiny 
   * @param newCategory 
   */
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
    this.userApi.updateTasks(destiny);
  }

  refreshTask(destiny: User): void {

    this.userApi.updateTasks(destiny);
  }

  findTasksByState(user: User, stateToFind: string): Task[] {
    if (user.tasks)
      return user.tasks.filter(
        task => task.state === stateToFind

      );
    return [];
  }

}
