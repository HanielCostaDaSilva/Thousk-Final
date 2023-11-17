import { Component } from '@angular/core';
import User from '../../shared/model/User';

@Component({
  selector: 'app-user-show-task',
  templateUrl: './user-show-task.component.html',
  styleUrls: ['./user-show-task.component.css']
})
export class UserShowTaskComponent {

isCreatingTask: boolean = false; //False if is not creating task, True if is creating Task
toogleMessageList: string[] = ["Adicionar Tarefa","Esconder"];
posicao:number=0;


userSelected!:User; 

toggleCreateTask() {
  this.isCreatingTask = !this.isCreatingTask;
  this.posicao= (this.posicao + 1) % this.toogleMessageList.length;
}

onUserselectedChange(userChanged:User){
  this.userSelected= userChanged;
  console.log(this.userSelected);
}

}
