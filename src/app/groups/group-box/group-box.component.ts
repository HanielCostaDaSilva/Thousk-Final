import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import Group from '../../shared/model/Group';
import { ConfirmDialogComponent } from '../../dialog/confirm-dialog/confirm-dialog.component';
import { GroupService } from '../../shared/service/group/group.service';
import { MatDialog } from '@angular/material/dialog';
import { MessageSnackService } from '../../shared/service/message/snack-bar.service';

@Component({
  selector: 'app-group-box',
  templateUrl: './group-box.component.html',
  styleUrls: ['./group-box.component.css']
})
export class GroupBoxComponent {

  @Input() group !: Group;
  @Output() removeGroupEvent = new EventEmitter();

  constructor(private dialog: MatDialog, private router: Router, private messageService: MessageSnackService) {

  }

  viewGroup(id: string) {
    this.router.navigate(['/group', { groupId: id }]);
  }

  removeGroup() {
    const dialogRef = this.dialog.open(
      ConfirmDialogComponent, {

      data: {
        title: `Deseja Remover: ${this.group.name}`,
      }
    }
    );
    dialogRef.afterClosed().subscribe((result) => {
      try {
        if (result) {
          this.removeGroupEvent.emit(this.group);

          this.messageService.sucess(`Grupo ${this.group.name} apagado com sucesso`);
        } else {
          this.messageService.inform(`Remoção do grupo${this.group.name} cancelada`);
          
        }
        
      }catch(error:any){       
        this.messageService.error(error.message);
      }
    })
  }
}
