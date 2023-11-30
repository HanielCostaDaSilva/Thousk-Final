import { Component } from '@angular/core';


import User from '../../shared/model/User';
import UserService from '../../shared/service/user/user.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent{

  users:User[] =[];

  constructor( private userService: UserService){
  }

  ngOnInit(): void {
  
    this.userService.getAll().subscribe(users => this.users = users);
    
  }
}
