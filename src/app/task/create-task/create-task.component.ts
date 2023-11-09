import { Component } from '@angular/core';

import Task from '../../shared/model/Task';
import AuthService from '../../shared/service/auth/auth.service';

import TaskService from '../../shared/service/task/task.service';

import User from '../../shared/model/User';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})

export class CreateTaskComponent {
  private _actualTask !: Task;

  private dateAtual!: Date;

  private _actualUser : User | undefined;
  
  dateStart:Date;
  dateFinal:Date |undefined;

  minDateFinal!:Date;


  constructor(private authService:AuthService, private taskService:TaskService){
    this.dateStart= this.dateAtual;
    this.dateFinal= this.dateAtual;
    this.minDateFinal= this.dateAtual;
  }
  
  ngOnInit() {
    this.dateAtual = new Date();
    this._actualUser = this.authService.currentUser;
    this._actualTask = new Task('','','',this._actualUser,  this.dateStart, this.dateFinal)

  }
  
  create(): void {
    
    const taskCreated= this.taskService.createTask(
      this._actualTask.title,
      this._actualTask.description,
      this._actualTask.imageLink,
      this._actualTask.author,
      this._actualTask.dateStart,
      this._actualTask.dateFinal,
      this._actualTask.state,
      this._actualTask.category);
      this.authService.currentUser?.addTask(taskCreated);
      console.log(this.authService.currentUser)

    }

  get actualTask():Task{
    return this._actualTask;
  }

}