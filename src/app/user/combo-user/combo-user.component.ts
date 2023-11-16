import { Component, OnInit } from '@angular/core';
import UserService from '../../shared/service/user/user.service';
import User from '../../shared/model/User';

@Component({
  selector: 'app-combo-user',
  templateUrl: './combo-user.component.html',
  styleUrls: ['./combo-user.component.css'],
})
export class ComboUserComponent implements OnInit {
  
  users !: User[];
  userSelected !:User;

  constructor(private userService: UserService){
  }
  
  ngOnInit(): void {
    this.userService.getAll().subscribe(users =>this.users = users);
  }
  
}
