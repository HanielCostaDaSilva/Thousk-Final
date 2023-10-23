import { Injectable } from '@angular/core';

import User from '../../model/User'
import Task from '../../model/Task';
import TASKS from '../../model/TASKS';

@Injectable({
  providedIn: 'root'
})
export default class TaskService {
  
  tasks: Task[] = TASKS; //A ser substituido por uma classe repositorio
  
  constructor() { }

  createTask(task :Task) :Task{
    
    this.tasks.push(task);
    task.userCreator?.inserirTask(task);
    
    return task;

  }

  removeTask(task: Task): void{
    const userCreator = task.userCreator;
    
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    
    userCreator?.removerTask(task); // remove a task da lista do usuário;
  }

  editTask(task: Task,newTitleTask:string, newDescriptionTask:string, 
    newImageLinkTask:string ):void{
      task.title = newTitleTask;
      task.description = newDescriptionTask;
      task.imageLink = newImageLinkTask; 
      
    }
}
