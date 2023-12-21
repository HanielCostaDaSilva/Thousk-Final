import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


import User from '../../shared/model/User';
import UserService from '../../shared/service/user/user.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  @Input() usersToShow: User[] = [];
  @Output() removeUserEvent = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    if (this.usersToShow.length == 0) {
      this.userService.getAll().subscribe(users => {
        this.usersToShow = users;

      })
    }
  }

  removeUser(user: User): void {
    if (this.removeUserEvent.observers.length > 0) {
      this.removeUserEvent.emit(user);
    } else {
      this.userService.remove(user);
    }
  }
}
