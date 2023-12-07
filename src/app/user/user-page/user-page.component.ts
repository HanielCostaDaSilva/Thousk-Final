import { Component } from '@angular/core';
import User from '../../shared/model/User';
import TaskService from '../../shared/service/task/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import UserService from '../../shared/service/user/user.service';

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


  constructor(private userService: UserService,
      private router: Router, private actualRouter: ActivatedRoute) {

    const id = this.actualRouter.snapshot.paramMap.get('userId');

    if (id) {
      this.userId= id;
       this.userService.getUserById(id).subscribe(user => {
        this.user = user;
      }); 
    } 
  }

  toggleCreateTask() {
    this.isCreatingTask = !this.isCreatingTask;
    this.posicao = (this.posicao + 1) % this.toogleMessageList.length;
  }

}
