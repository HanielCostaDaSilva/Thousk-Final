import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';



import TaskUser from 'src/model/TaskUser';
import { EditTaskModalComponent } from './components/edit-task-modal/edit-task-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleModule = 'Workspace';

  private __titleCompany = "I Need Your Help"

  private __titleTaskDoing: string = '';
  private __descriptionTaskDoing: string = '';
  private __imageLinkTaskDoing: string = '';

  private __tasksDoing = [
    new TaskUser("Revisar Relatório Mensal", "Revisar o relatório de vendas mensal e destacar os principais insights e tendências.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwPwUopN2Lbc2k9k7dqd2DBrcxaFOBdapyA&usqp=CAU"),
    new TaskUser("Design de Banner Promocional", "Criar um banner promocional atraente para a próxima campanha de vendas da empresa.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwPwUopN2Lbc2k9k7dqd2DBrcxaFOBdapyA&usqp=CAU"),
    new TaskUser("Desenvolver Página de Login", "Desenvolver a página de login do aplicativo com autenticação de dois fatores.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwPwUopN2Lbc2k9k7dqd2DBrcxaFOBdapyA&usqp=CAU"),
    new TaskUser("Redação de Artigo", "Escrever um artigo informativo sobre as últimas tendências em tecnologia de inteligência artificial.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwPwUopN2Lbc2k9k7dqd2DBrcxaFOBdapyA&usqp=CAU")
  ]

  constructor(private dialog: MatDialog) { }

  get titleCompany() {
    return this.__titleCompany
  }

  get tasksDoing() {
    return this.__tasksDoing
  }
  set titleTaskDoing(s: string) {
    this.__titleTaskDoing = s;
  }
  set descriptionTaskDoing(s: string) {
    this.__descriptionTaskDoing = s;
  }
  set linkImageTaskDoing(s: string) {
    this.__imageLinkTaskDoing = s;
  }

  searchTaskDoing(title: string): TaskUser | null {
    for (const taskDoing of this.__tasksDoing) {
      if (taskDoing.title === title)
        return taskDoing;
    }
    return null;
  }
  addUserTask() {
    const task = this.searchTaskDoing(this.__titleTaskDoing);

    if (!task) {
      this.__tasksDoing.push(new TaskUser(this.__titleTaskDoing, this.__descriptionTaskDoing, this.__imageLinkTaskDoing));
    }
  }

  removeTaskDoing(task: TaskUser) {
    const index = this.__tasksDoing.indexOf(task);
    console.log(index);
    this.__tasksDoing.splice(index, 1);
  }

  
  editTaskDoing(task: TaskUser) {
    this.titleTaskDoing = task.title;
    this.descriptionTaskDoing = task.description;
    this.linkImageTaskDoing = task.imageLink;
    
    const dialogRef = this.dialog.open(EditTaskModalComponent, {
      width: '400px',
      data: {
        title: this.titleTaskDoing,
        descrption: this.descriptionTaskDoing,
        imageLink: this.linkImageTaskDoing
      }
    });
    console.log(task);
    
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        task.title = result.title;
        task.description = result.description;
        task.imageLink = result.imageLink;
      }
    });
  }

}