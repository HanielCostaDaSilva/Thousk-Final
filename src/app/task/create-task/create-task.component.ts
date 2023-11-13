import { Component, Input, OnInit } from '@angular/core';

import Task from '../../shared/model/Task';

import TaskService from '../../shared/service/task/task.service';
import User from '../../shared/model/User';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})

export class CreateTaskComponent implements OnInit {
  
  actualTask: Task = new Task('','','',new Date(),new Date());

  dateAtual!: Date;
  
  dateStart:Date;
  dateFinal:Date |undefined;

  minDateFinal!:Date;

  @Input() actualUser !: User;

  constructor( private taskService:TaskService){
    this.dateStart= this.dateAtual;
    this.dateFinal= this.dateAtual;
    this.actualTask.author = this.actualUser; // Esteja sempre com o usuario que foi selecionado.
  }
  
  ngOnInit() {
    this.dateAtual = new Date();
    this.minDateFinal= this.dateAtual;
  }
  
  create(): void {
    if(this.actualUser)
    this.taskService.registerTask(this.actualTask, this.actualUser);
    console.log(this.actualTask);
    }
    

}