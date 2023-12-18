import { Component } from '@angular/core';

import UserService from '../../shared/service/user/user.service';
import { MessageSnackService } from '../../shared/service/message/snack-bar.service';
import User from '../../shared/model/User';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css', "../container-form.css"]
})

export class RegisterUserComponent {
  userToRegister: User = new User();

  registeredUser: number = -1;
  statusMessage: string = '';

  constructor(private userService: UserService, private messageService: MessageSnackService) {

  }
  registerUser() {
    try {
      if (!this.userToRegister.email || !this.userToRegister.password || !this.userToRegister.nickname)
        throw new Error(`Fill all the requireds fields`);

      const userFinded = this.userService.getUserByNickName(this.userToRegister.nickname);

      userFinded.subscribe(users => {
        console.log(users);
        if (users.length > 0) {
          this.registeredUser = 0;
          this.messageService.error(`Usuário ${users[0].nickname} Já registrado!`);
          return;
        }
        else {
          this.userService.register(this.userToRegister).subscribe(user => {
            this.registeredUser = 1;
            this.messageService.sucess(`Sucesso ao registrar o Usuário ${user.nickname}!`)
          });
        }
      })
    }
    catch (error: any) {
      this.registeredUser = 0;
      this.messageService.error(error.message);

    }
  }

}
