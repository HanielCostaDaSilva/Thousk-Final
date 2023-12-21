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

  @Input() creator!: User;

  newGroup: Group = new Group();

  constructor(private userService: UserService, private groupService: GroupService, private messageService: MessageSnackService) {
  }

  create(): void {
    try {
      console.log(this.creator);
      console.log(this.newGroup);
      if (this.creator) {
        this.newGroup.authorID = this.creator.id;
        this.groupService.create(this.newGroup).subscribe(group => {
          
          try{
            this.userService.addGroup(this.creator, group);
            this.groupService.addParticipant(group, this.creator);
            this.messageService.sucess(`Grupo ${group.name} criado com sucesso!`);
          }
          catch(err:any){
            this.messageService.error(err.message);
          }
        })

        };
    }catch(error: any) {
    this.messageService.error(error.message);
  }


}
}
