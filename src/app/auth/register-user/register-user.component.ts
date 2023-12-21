import { Component } from '@angular/core';
import UserService from '../../shared/service/user/user.service';
import { MessageSnackService } from '../../shared/service/message/snack-bar.service';
import User from '../../shared/model/User';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from '../../dialog/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { finalize, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css', '../container-form.css']
})

export class RegisterUserComponent {
  userToRegister: User = new User();
  registerSuccessCheck: number = -1;
  statusMessage: string = '';

  constructor(private userService: UserService, private dialog: MatDialog, private messageService: MessageSnackService) { }

  async register() {
    try {
      this.validateInput();
      let users;
      if (this.userToRegister && this.userToRegister.nickname) 
        users = await this.userService.getUserByNickName(this.userToRegister.nickname).pipe(take(1)).toPromise();

      if (users && users.length > 0) {
        this.messageService.error(`Usuário ${this.userToRegister.nickname} já existe!`);
        this.registerSuccessCheck = 0;
        return;
      }

      const result = await this.confirmRegister().toPromise();

      if (result) {
        await this.registerUser();
      } else {
        throw new Error('O Cadastramento foi cancelado');
      }
    } catch (error: any) {
      this.handleRegistrationError(error);
    }
  }

  private validateInput() {
    if (!this.userToRegister.nickname) {
      throw new Error('Please enter a nickname');
    } else if (!this.userToRegister.password) {
      throw new Error('Please enter a password');
    }
  }

  private async registerUser() {
    try {
      const registeredUser = await this.userService.register(this.userToRegister).toPromise();
      this.messageService.sucess(`Usuário ${registeredUser?.nickname || ''} registrado com sucesso!`);
      this.registerSuccessCheck = 1;
    } catch (error: any) {
      this.handleRegistrationError(error);
    }
  }

  private handleRegistrationError(error: any) {
    this.registerSuccessCheck = 0;
    this.messageService.error(`Erro ao registrar usuário: ${error.message}`);
  }

  private confirmRegister(): Observable<any> {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: `Deseja Se cadastrar? `,
      }
    });
    return dialogRef.afterClosed();
  }
}
