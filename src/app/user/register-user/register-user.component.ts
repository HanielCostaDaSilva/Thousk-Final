import { Component } from '@angular/core';

import User from "../../shared/model/User"
import USERS from "../../shared/model/USERS"
import AuthService from '../../shared/service/auth/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})

export class RegisterUserComponent {
  private users: User[] = USERS;
  private __nickname: string = '';
  private __email: string = '';
  private __password: string = '';
  private authSevice :AuthService= new AuthService();

  errorMessage: string = '';

  registerUser() {
    try {
      if (!this.__email || !this.__password || !this.__nickname)
        throw new Error(`Fill all the requireds fields`);
      const user = this.authSevice.register(this.__nickname,this.__email,this.__password);
      console.log(user);
    } 
    catch (error:any) {
      this.errorMessage = error.message;
    }

  }



  set nickname(newNickname: string) {
    this.__nickname = newNickname;
  }

  set email(newEmail: string) {
    this.__email = newEmail;
  }
  set password(newPassword: string) {
    this.__password = newPassword;
  }

  get nickname() {
    return this.__nickname;
  }
  get email() {
    return this.__email;
  }
  get password() {
    return this.__password;
  }

}
