import { Component } from '@angular/core';
import User from '../../shared/model/User';
import { ActivatedRoute } from '@angular/router';
import UserService from '../../shared/service/user/user.service';
import TaskService from '../../shared/service/task/task.service';
import Task from '../../shared/model/Task';
import Group from '../../shared/model/Group';
import { GroupService } from '../../shared/service/group/group.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  isCreatingTask: boolean = false; //False if is not creating task, True if is creating Task
  
  isCreatingGroup: boolean = false; //False if is not creating group, True if is creating Group
  
  isShowDoingTasks = false;
  isShowDoneTasks = false;
  isShowAllTasks = false;


  toogleMsgListTask: string[] = ["Adicionar Tarefa", "Esconder"];
  positionMsgListTask: number = 0;


  toogleMsgListGroup: string[] = ["Criar Um grupo", "Esconder"];
  positionMsgListGroup: number = 0;

  user!: User;
  userId!: String;


  constructor(private userService: UserService, private groupService: GroupService, private taskService: TaskService, private actualRouter: ActivatedRoute) {

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
    this.positionMsgListTask = (this.positionMsgListTask + 1) % this.toogleMsgListTask.length;
  }

  toggleCreateGroup() {
    this.isCreatingGroup = !this.isCreatingGroup;
    this.positionMsgListGroup = (this.positionMsgListGroup + 1) % this.toogleMsgListGroup.length;
  }


  filterTaskState(stateToFind: string = ""): Task[] {

    if (this.user && this.user.tasks) {
      if (stateToFind)
        return this.taskService.findTasksByState(this.user, stateToFind);

      return this.user.tasks;
    }

    return [];
  }
  filterGroups(): string[] {

  if (this.user && this.user.groups) {
    return this.user.groups;
  }

  return [];
}

}
