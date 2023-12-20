import UserService from '../../shared/service/user/user.service';
import { MessageSnackService } from '../../shared/service/message/snack-bar.service';
import { Router } from '@angular/router';
import User from '../../shared/model/User';
import { Component } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css', "../container-form.css"]
})
export class LoginUserComponent {

  statusMessage: string = '';

  userToLogin: User = new User();

  loginSucessCheck = -1;


  constructor(private userService: UserService, private messageService: MessageSnackService, private router: Router) {
  }

  login() {
    try {

      if (!this.userToLogin.nickname) {
        throw new Error('Please enter a nickname')
      }
      else if (!this.userToLogin.password) {
        throw new Error('Please enter a password');
      }

      const usersFound = this.userService.getUserByNickName(this.userToLogin.nickname).pipe( take(1));

      usersFound.subscribe(users => {

        if (users.length == 0) {
          this.messageService.error(`Usuário ${this.userToLogin.nickname} Não encontrado!`);
          this.loginSucessCheck = 0;

          return;
        }
        else {
          this.messageService.sucess(`Seja bem vindo ${users[0].nickname}!`)
          this.loginSucessCheck = 1;
          this.router.navigate(['/user', users[0].id]);
        }
      })
    }

    catch (error: any) {
      this.loginSucessCheck = 0
      this.messageService.error(error.message);
    }
  }


}