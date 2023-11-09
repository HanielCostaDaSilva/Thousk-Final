import { Component } from '@angular/core';

import User from "../../shared/model/User"
import AuthService from '../../shared/service/auth/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css', "../container-form.css"]
})

export class RegisterUserComponent {
  private _nickname: string = '';
  private _email: string = '';
  private _password: string = '';

  registeredUser: number = -1;
  statusMessage: string = '';

  constructor(private authService: AuthService){

  }
  registerUser() {
    try {
      if (!this._email || !this._password || !this._nickname)
        throw new Error(`Fill all the requireds fields`);
      const user:User = this.authService.register(this._nickname,this._email,this._password);
      this.registeredUser=1;
      this.statusMessage="User registered successfully"
    } 
    catch (error:any) {
      this.statusMessage = error.message;
      this.registeredUser=0;

    }
  }

  set nickname(newNickname: string) {
    this._nickname = newNickname;
  }

  set email(newEmail: string) {
    this._email = newEmail;
  }
  set password(newPassword: string) {
    this._password = newPassword;
  }

  get nickname() {
    return this._nickname;
  }
  get email() {
    return this._email;
  }
  get password() {
    return this._password;
  }

}
