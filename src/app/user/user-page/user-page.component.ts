import { Component } from '@angular/core';
import User from '../../shared/model/User';
import { ActivatedRoute } from '@angular/router';
import UserService from '../../shared/service/user/user.service';
import TaskService from 'src/app/shared/service/task/task.service';
import Task from 'src/app/shared/model/Task';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {


  isCreatingTask: boolean = false; //False if is not creating task, True if is creating Task
  toogleMessageList: string[] = ["Adicionar Tarefa", "Esconder"];

  posicao: number = 0;

  user!: User;
  userId!: String;


  constructor(private userService: UserService, private taskService: TaskService, private actualRouter: ActivatedRoute) {

    const id = this.actualRouter.snapshot.paramMap.get('userId');

    if (id) {
      this.userId = id;
      this.userService.getUserById(id).subscribe(user => {
        this.user = user;
      });
    }
  }

  toggleCreateTask() {
    this.isCreatingTask = !this.isCreatingTask;
    this.posicao = (this.posicao + 1) % this.toogleMessageList.length;
  }

  filterTaskState(stateToFind: string=""): Task[] {
    if (stateToFind)
      return this.taskService.findTasksByState(this.user, stateToFind);

    else if (this.user.tasks)
      return this.user.tasks;
    else
      return [];
  }
}
