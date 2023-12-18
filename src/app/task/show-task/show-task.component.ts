import { Component, EventEmitter, Input, Output } from '@angular/core';
import Task from '../../shared/model/Task';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { MatDialog } from '@angular/material/dialog';
import User from '../../shared/model/User';
import TaskService from '../../shared/service/task/task.service';

import { ConfirmDialogComponent } from '../../dialog/confirm-dialog/confirm-dialog.component';
import { MessageSnackService } from '../../shared/service/message/snack-bar.service';


@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent {

  @Input() userOwner !: User; //Usuário que sofrerá as alterações 
  @Input() tasksToShow !: Task[]; // Tarefas que vão ser mostradas 

  constructor(private dialog: MatDialog, private taskService: TaskService, private messageService: MessageSnackService) {
  }

  changeTaskState(task: Task) {
    console.log(task);
    this.taskService.refreshTask(this.userOwner);
    this.messageService.sucess(`Tarefa alterada para o estado ${task.state}`);

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
        this.taskService.removeTask(task, this.userOwner).subscribe(() => {
          if (!task.title) {
            return;
          }

          const titleTaskRemoved = (task.title.length > 10 ? task.title?.substring(0, 10) + '...' : task.title);
          this.messageService.sucess(`Tarefa ${titleTaskRemoved} removida com sucesso`);

        });

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
          const titleTaskEdited = (result.title.length > 10 ? result.title?.substring(0, 10) + '...' : result.title);
          
          this.messageService.sucess(`Tarefa ${titleTaskEdited} alterada com sucesso`);

      }
    });
  }


}
