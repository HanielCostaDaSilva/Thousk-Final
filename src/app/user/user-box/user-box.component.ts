import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import User from '../../shared/model/User';
import { ConfirmDialogComponent } from 'src/app/dialog/confirm-dialog/confirm-dialog.component';
import UserService from '../../shared/service/user/user.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.css']
})
export class UserBoxComponent {

  @Input() user !: User;

  constructor(private dialog: MatDialog, private router: Router, private userService: UserService) {

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
        this.userService.remove(this.user);
      }
    })
  }
}
