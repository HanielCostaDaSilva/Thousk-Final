import { Component, Input, OnInit } from '@angular/core';

import Task from '../../shared/model/Task';

import TaskService from '../../shared/service/task/task.service';
import User from '../../shared/model/User';
import UserService from '../../shared/service/user/user.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css',/* '../../styles.css' */]
})

export class CreateTaskComponent implements OnInit {
  
  actualTask: Task = new Task();

  dateAtual!: Date;
  
  dateStart:Date;
  dateFinal:Date |undefined;

  minDateFinal!:Date;

  @Input()actualUser !: User;
  //userID !: string;

  constructor( private taskService:TaskService, private userService:UserService){
    this.dateStart= this.dateAtual;
    this.dateFinal= this.dateAtual;

  }
  
  ngOnInit() {
    this.dateAtual = new Date();
    this.minDateFinal= this.dateAtual;
    /* this.userService.getUserById(this.userID).subscribe(user =>{
      this.actualUser = user; 
    }) */
  }
  
  create(): void {
    if(this.actualUser)
    this.taskService.registerTask(this.actualTask, this.actualUser);
    }
    

}