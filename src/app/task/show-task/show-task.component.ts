import { Component, Input } from '@angular/core';
import Task from '../../shared/model/Task';
import TASKS from '../../shared/TASKS';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog
import User from '../../shared/model/User';
import TaskService from '../../shared/service/task/task.service';



@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent {

  @Input() userActual !: User;
  tasks: Task[] = (this.userActual == null ? TASKS : this.userActual.tasks); //Mostra todas as tasks do sistema caso não tenha tasks 



  constructor(private dialog: MatDialog, private taskService: TaskService) { }

  removeTask(task: Task) {
    this.taskService.removeTask(task);
  }

  editTask(task: Task) {

    const dialogRef = this.dialog.open(EditTaskComponent, {
      width: '400px',
      data: {
        title: task.title,
        descrption: task.description,
        imageLink: task.imageLink,
        taskDateStart: task.dateStart,
        taskDateFinal: task.dateFinal,
        taskCategory: task.category
      },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.taskService.editTask(task, result.title, result.description, 
          result.imageLink,result.dateStart,
          result.dateFinal);
      }
    });
  }
}
