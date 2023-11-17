import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import UserService from '../../shared/service/user/user.service';
import User from '../../shared/model/User';

@Component({
  selector: 'app-combo-user',
  templateUrl: './combo-user.component.html',
  styleUrls: ['./combo-user.component.css'],
})
export class ComboUserComponent implements OnInit {
  users!: User[];
  userSelected!: User;
  
  @Output() userSelectedChange = new EventEmitter<User>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.usersUpdated.subscribe(users => {
      this.users = users;
      if (users.length > 0) {
        this.selectUser(users[0]);
      }
    });
  }

  selectUser(user: User): void {
    this.userSelected = user;
    this.userSelectedChange.emit(user);
  }
}
