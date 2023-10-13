import { Component } from '@angular/core';
import Task from '../../shared/model/Task';
import TASKS from '../../shared/model/TASKS';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent {

  tasks: Task[] = TASKS;
  private titleTask: string = '';
  private descriptionTask: string = '';
  private imageLinkTask: string = '';
  
  constructor(private dialog: MatDialog) {}

  removeTask(task: Task) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }

  editTask(task: Task) {
    this.titleTask = task.title;
    this.descriptionTask = task.description;
    this.imageLinkTask = task.imageLink;
    
    const dialogRef = this.dialog.open(EditTaskComponent, {
      width: '400px',
      data: {
        title: this.titleTask,
        descrption: this.descriptionTask,
        imageLink: this.imageLinkTask
      }
    });
    
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        task.title = result.title;
        task.description = result.description;
        task.imageLink = result.imageLink;
      }
    });
  }
}
