import { Component } from '@angular/core';
import Group from '../../shared/model/Group';
import UserService from '../../shared/service/user/user.service';
import { GroupService } from '../../shared/service/group/group.service';
import { ActivatedRoute } from '@angular/router';
import TaskService from '../../shared/service/task/task.service';
import Task from '../../shared/model/Task';
import { OneInputDialogComponent } from '../../dialog/one-input-dialog/one-input-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { forkJoin, switchMap, take } from 'rxjs';
import { MessageSnackService } from '../../shared/service/message/snack-bar.service';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.css']
})
export class GroupPageComponent {

  groupId!: string;
  currentGroup!: Group;

  isCreatingTask: boolean = false; //False if is not creating task, True if is creating Task

  isShowDoingTasks = false;
  isShowDoneTasks = false;
  isShowAllTasks = false;

  isShowAllMembers = false;

  toogleMsgListTask: string[] = ["Adicionar Tarefa", "Esconder"];
  positionMsgListTask: number = 0;


  constructor(private userService: UserService, private groupService: GroupService, private taskService: TaskService, private messageService: MessageSnackService, private actualRouter: ActivatedRoute, private dialog: MatDialog) {

    const id = this.actualRouter.snapshot.paramMap.get('groupId');

    if (id) {
      this.groupId = id;
      this.groupService.getById(id).subscribe(group => {
        this.currentGroup = group;
      });
    }
  }

  toggleCreateTask() {
    this.isCreatingTask = !this.isCreatingTask;
    this.positionMsgListTask = (this.positionMsgListTask + 1) % this.toogleMsgListTask.length;
  }

  filterTaskState(stateToFind: string = ""): Task[] {
    if (this.currentGroup && this.currentGroup.tasks) {
      return stateToFind ?
        this.taskService.findTasksByState(this.currentGroup, stateToFind) :
        this.currentGroup.tasks;
    }

    return [];
  }


  filterparticipants(): string[] {

    if (this.currentGroup && this.currentGroup.participants) {
      return this.currentGroup.participants;
    }

    return [];
  }

  addNewMember() {
    const dialogData = {
      title: 'Adicionar novo membro',
      description: 'Digite o nickname do usuário que deseja adicionar no grupo ' + this.currentGroup.name,
      label: 'Nickname:'
    };

    const dialogRef = this.dialog.open(OneInputDialogComponent, {
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(result => {
      try {
        if (result) {
          this.userService.getUserByNickName(result.response).pipe(
            take(1),
            switchMap(usersFound => {
              if (usersFound.length === 0) {
                throw new Error(`Usuário ${result.response} não foi encontrado!`);
              }

              const userFound = usersFound[0];

              if (!this.currentGroup.participants || !userFound.id) {
                throw new Error(`Grupo ou usuário não existe`);
              }

              // Adiciona o usuário ao grupo e atualiza os serviços
              return forkJoin([
                this.groupService.addParticipant(this.currentGroup, userFound),
                this.userService.addGroup(userFound, this.currentGroup)
              ]).pipe(
                take(1)
              );
            })
          ).subscribe(() => {
            this.messageService.sucess(`Usuário ${result.response} adicionado no grupo`);
          }, (error: any) => {
            this.messageService.error(error.message);
          });
        }
      } catch (err: any) {
        this.messageService.error(err.message);
      }
    });
  }

  removeParticipant(userId: string) {
    this.userService.getUserById(userId).subscribe(user => {
      try {
        this.groupService.removeParticipant(this.currentGroup, user);
        this.userService.removeGroup(user, this.currentGroup);
        this.messageService.sucess(`Usuário ${user.nickname} removido`);
      } catch (err: any) {
        this.messageService.error(err.message);
      }
    }
    )
  }
}
