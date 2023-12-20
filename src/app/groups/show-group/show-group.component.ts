import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Group from '../../shared/model/Group';
import {GroupService} from '../../shared/service/group/group.service';
import User from '../../shared/model/User';
import UserService from '../../shared/service/user/user.service';
@Component({
  selector: 'app-show-group',
  templateUrl: './show-group.component.html',
  styleUrls: ['./show-group.component.css']
})
export class ShowGroupComponent {
  @Input() groupsToShow: Group[] = [];
  @Input() currentUser!: User;
  
  @Output() removeGroupEvent = new EventEmitter();

  constructor(private groupService: GroupService, private userService: UserService ) { }

  ngOnInit(): void {
    if (this.groupsToShow.length == 0) {
      this.groupService.getAll().subscribe(group => {
        this.groupsToShow = group;
      })
    }
  }

  removeGroup(group: Group): void {
    if (this.currentUser) {
      this.quitGroup(group);
    } else {
      this.groupService.remove(group);
    }
  }

  
  quitGroup(group: Group){
    this.userService.removeGroup(this.currentUser, group);
    }
}
