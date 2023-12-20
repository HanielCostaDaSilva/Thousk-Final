import { Component, Input } from '@angular/core';
import User from '../../shared/model/User';
import UserService from '../../shared/service/user/user.service';
import { GroupService } from '../../shared/service/group/group.service';
import Group from '../../shared/model/Group';
import { MessageSnackService } from '../../shared/service/message/snack-bar.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent {

  @Input() actualUser!: User;

  newGroup: Group = new Group();

  constructor(private userService: UserService, private groupService: GroupService, private messageService: MessageSnackService) {
  }

  create(): void {
    try {
      if (this.actualUser) {
        this.newGroup.authorID = this.actualUser.id;
        this.groupService.create(this.newGroup);
        this.userService.addGroup(this.actualUser, this.newGroup);
        this.groupService.addParticipant(this.newGroup, this.actualUser);
      }

    } catch (error: any) {
      this.messageService.error(error.message);
    }


  }
}
