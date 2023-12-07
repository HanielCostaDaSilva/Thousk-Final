import { Component, Input } from '@angular/core';
import Task from '../../shared/model/Task';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog
import User from '../../shared/model/User';
import TaskService from '../../shared/service/task/task.service';
import { OnInit } from '@angular/core';
import UserService from '../../shared/service/user/user.service';


@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {

  actualUser !: User;
  @Input() userID !: string;

  constructor(private dialog: MatDialog, private userService:UserService, private taskService: TaskService) { 
  }

  removeTask(task: Task) {
    this.taskService.removeTask(task,this.actualUser);
  }

  editTask(task: Task) {

    const dialogRef = this.dialog.open(EditTaskComponent, {
      width: '400px',
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
          result.imageLink,result.dateStart,
          result.dateFinal,this.actualUser);
      }
    });
  }

  ngOnInit(): void {
    this.userService.getUserById(this.userID).subscribe(user =>{
      
      this.actualUser= user;
    } 
    )

  }

}
