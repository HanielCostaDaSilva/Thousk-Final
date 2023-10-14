import { Component } from '@angular/core';
import USERS from '../../shared/model/USERS';
import User from '../../shared/model/User';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {

  errorMessage: string ='';
  nickname: string = '';
  password: string = '';
  users :User[] = USERS;

  login() {
    if(!this.nickname){
      this.errorMessage='Please enter a nickname'
    }
    else if(!this.password){
      this.errorMessage='Please enter a password';
    }

    const userLogado = this.users.find(
      user => user.nickname === this.nickname && user.password === this.password);

    if (userLogado) {
      alert(`seja bem vindo ${userLogado.nickname}`)
    }
    else{ 
      this.errorMessage=' Nickname or password Invalid.'
    }
  }
}

