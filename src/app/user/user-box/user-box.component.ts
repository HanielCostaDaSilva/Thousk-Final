import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import User from '../../shared/model/User';
import { ConfirmDialogComponent } from '../../dialog/confirm-dialog/confirm-dialog.component';
import UserService from '../../shared/service/user/user.service';
import { MatDialog } from '@angular/material/dialog';
import { MessageSnackService } from '../../shared/service/message/snack-bar.service';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.css']
})
export class UserBoxComponent {

  @Input() user !: User;
  @Output() removeUserEvent= new EventEmitter();

  constructor(private dialog: MatDialog, private router: Router, private messageService: MessageSnackService) {

  }

  viewUser(id: string) {
    this.router.navigate(['/user', { userId: id }]);
  }

  removeUser() {
    const dialogRef = this.dialog.open(
      ConfirmDialogComponent, {

      data: {
        title: `Deseja Remover: ${this.user.nickname}`,
        description: `Ele Não Fez mal a nínguem...`
      }
    }
    );
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.removeUserEvent.emit(this.user);
        
        this.messageService.sucess(`Usuário ${this.user.nickname} removido com sucesso`);
      }else{
        this.messageService.inform(`Remoção do usuário${this.user.nickname} cancelada`);

      }
    })
  }
  
}
