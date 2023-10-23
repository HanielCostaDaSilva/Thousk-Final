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
  private __actualTask !: Task;

  private dateAtual!: Date;

  private __actualUser : User | undefined;
  
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
    this.__actualUser = this.authService.currentUser;
    this.__actualTask = new Task('','','',this.__actualUser,  this.dateStart, this.dateFinal)

  }
  
  create(): void {
    console.log(this.authService.currentUser)

    this.taskService.createTask(this.__actualTask);
  }

  get actualTask():Task{
    return this.__actualTask;
  }

}