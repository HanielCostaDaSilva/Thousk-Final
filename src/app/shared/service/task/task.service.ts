import { Injectable } from '@angular/core';

import Task from '../../model/Task';
import TASKS from '../../TASKS';
import User from '../../model/User';

@Injectable({
  providedIn: 'root'
})
export default class TaskService {
  
  tasks: Task[] = TASKS;
  
  constructor() { }

  createTask(
    title: string,
    description: string,
    imageLink: string,
    author: User | undefined,
    dateStart: Date,
    dateFinal: Date | undefined,
    state: string = 'waiting',
    category: string = ''
  ): Task {

    const newTask = new Task(title, description, imageLink, author, dateStart, dateFinal, state, category);
    return newTask;
  
  }

  removeTask(task: Task): void{
    const author = task.author;
    
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    
    author?.removeTask(task); // remove a task da lista do usuário;


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
    return task;
  }
}
