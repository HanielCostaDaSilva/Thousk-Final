import { Injectable } from '@angular/core';

import Task from '../../model/Task';
import User from '../../model/User';
//import { UserApiService } from '../api/user-api.service';

import { Observable } from 'rxjs';
import { UserFirestoreService } from '../firestore/user-firestore.service';
import { GroupFirestoreService } from '../firestore/group-firestore.service';
import Group from '../../model/Group';

@Injectable({
  providedIn: 'root'
})
export default class TaskService {

  constructor(private userApi: UserFirestoreService, private groupApi: GroupFirestoreService) { }

  registerTask(task: Task, destiny: User | Group): Observable<void> {
    destiny.tasks?.push(task);
    if (destiny instanceof User)
      return this.userApi.updateTasks(destiny);
    else {
      return this.groupApi.updateTasks(destiny);

    }
  }


  removeTask(task: Task, destiny: User | Group): Observable<void> {
    if (destiny.tasks && destiny.tasks.indexOf(task) !== -1) {
      destiny.tasks.splice(destiny.tasks.indexOf(task), 1);
    }
    if (destiny instanceof User)
      return this.userApi.updateTasks(destiny);
    else {
      return this.groupApi.updateTasks(destiny);

    }

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
    destiny: User | Group,
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
    if (destiny instanceof User)
      this.userApi.updateTasks(destiny);
    else
      this.groupApi.updateTasks(destiny);

  }

  refreshTask(destiny: User | Group): Observable<void> {

    if (destiny instanceof User)
      return this.userApi.updateTasks(destiny);
    else {
      return this.groupApi.updateTasks(destiny);

    }
  }

  findTasksByState(owner: User | Group, stateToFind: string): Task[] {
    if (owner.tasks) {

      return owner.tasks.filter(
        task => task.state === stateToFind
      );
    }
    return [];
  }

}
