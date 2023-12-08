import { Component, Input } from '@angular/core';
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

  @Input() actualUser !: User;

  constructor(private dialog: MatDialog, private taskService: TaskService) {
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
        this.taskService.removeTask(task, this.actualUser);
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
          result.dateFinal, this.actualUser);
      }
    });
  }

}
