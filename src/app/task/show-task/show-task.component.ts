import { Component, EventEmitter, Input, Output } from '@angular/core';
import Task from '../../shared/model/Task';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { MatDialog } from '@angular/material/dialog';
import User from '../../shared/model/User';
import TaskService from '../../shared/service/task/task.service';

import { ConfirmDialogComponent } from 'src/app/dialog/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent {

  @Input() userOwner !: User; //Usuário que sofrerá as alterações 
  @Input() tasksToShow !: Task[]; // Tarefas que vão ser mostradas 
  
  constructor(private dialog: MatDialog, private taskService: TaskService) {
  }

  changeTaskState(task: Task) {
    console.log(task);
    this.taskService.refreshTask(this.userOwner);
  }

  removeTask(task: Task) {
    const dialogRef = this.dialog.open(
      ConfirmDialogComponent, {

      data: {
        title: `Deseja excluir: ${task.title}`,
        description: `Operação não poderá ser desfeita.`
      }
    }
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.taskService.removeTask(task, this.userOwner);
      }
    });
  }

  editTask(task: Task) {

    const dialogRef = this.dialog.open(EditTaskComponent, {
      data: {
        title: task.title,
        description: task.description,
        imageLink: task.imageLink,
        taskDateStart: task.dateStart,
        taskDateFinal: task.dateFinal,
        taskCategory: task.category
      },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.taskService.editTask(task, result.title, result.description,
          result.imageLink, result.dateStart,
          result.dateFinal, this.userOwner);
      }
    });
  }


}
