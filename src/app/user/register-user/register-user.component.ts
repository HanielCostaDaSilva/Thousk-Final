import { Component } from '@angular/core';

import User from "../../shared/model/User"
import AuthService from '../../shared/service/auth/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css', "../container-form.css"]
})

export class RegisterUserComponent {
  private __nickname: string = '';
  private __email: string = '';
  private __password: string = '';

  registeredUser: number = -1;
  statusMessage: string = '';

  constructor(private authService: AuthService){

  }
  registerUser() {
    try {
      if (!this.__email || !this.__password || !this.__nickname)
        throw new Error(`Fill all the requireds fields`);
      const user:User = this.authService.register(this.__nickname,this.__email,this.__password);
      console.log(user);
      this.registeredUser=1;
      this.statusMessage="User registered successfully"
    } 
    catch (error:any) {
      this.statusMessage = error.message;
      this.registeredUser=0;

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
