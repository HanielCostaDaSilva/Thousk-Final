import { Component, Input, OnInit } from '@angular/core';

import Task from '../../shared/model/Task';

import TaskService from '../../shared/service/task/task.service';
import User from '../../shared/model/User';
import { MessageSnackService } from '../../shared/service/message/snack-bar.service';
import Group from '../../shared/model/Group';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css',/* '../../styles.css' */]
})

export class CreateTaskComponent implements OnInit {

  actualTask: Task = new Task();

  dateAtual!: Date;

  dateStart: Date;
  dateFinal: Date | undefined;

  minDateFinal!: Date;

  @Input() creator !: User | Group;
  //userID !: string;

  constructor(private taskService: TaskService, private messageService: MessageSnackService) {
    this.dateStart = this.dateAtual;
    this.dateFinal = this.dateAtual;

  }

  ngOnInit() {
    this.dateAtual = new Date();
    this.minDateFinal = this.dateAtual;
  }

  create(): void {
    if (this.creator)
    console.log(this.actualTask)
      this.taskService.registerTask(this.actualTask, this.creator).subscribe(() => {
        let titleTask = this.actualTask.title;
        if (titleTask)
          titleTask = (titleTask.length > 10 ? titleTask.substring(0, 10) + '...' : titleTask);

        this.messageService.sucess(`Tarefa ${titleTask} criada com sucesso`);
        console.log(this.creator);
      })
  }

}