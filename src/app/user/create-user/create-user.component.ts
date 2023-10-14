import { Component } from '@angular/core';

import User from "../../shared/model/User"
import USERS from "../../shared/model/USERS"

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent {
  private users: User[] = USERS;
  private __nickname: string='';
  private __email: string='';
  private __password: string='';

  errorMessage:string ='';

  registerUser() {

    if (this.users.filter(user => user.nickname == this.__nickname).length > 0)
      console.error('User already registered');

    else {
      const user = new User(this.users.length, this.__nickname, this.__email, this.__password);
      console.log(user);
      this.users.push(user);
    }

  }
  set nickname (newNickname:string){
    this.__nickname = newNickname;
  }
  
  set email (newEmail:string){
    this.__email = newEmail;
  }
  set password (newPassword:string){
    this.__password = newPassword;
  }

  get nickname(){
    return this.__nickname;
  }
  get email(){
    return this.__email;
  }
  get password(){
    return this.__password;
  }
  }
