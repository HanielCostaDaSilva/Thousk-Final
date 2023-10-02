import { Component } from '@angular/core';

import TaskUser from 'src/model/TaskUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleModule = 'Workspace';
  
  private titleCompany = "I Need Your Help"
  __tasksDoing=[
    new TaskUser("Revisar Relatório Mensal", "Revisar o relatório de vendas mensal e destacar os principais insights e tendências.","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwPwUopN2Lbc2k9k7dqd2DBrcxaFOBdapyA&usqp=CAU"),
    new TaskUser("Design de Banner Promocional", "Criar um banner promocional atraente para a próxima campanha de vendas da empresa.","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwPwUopN2Lbc2k9k7dqd2DBrcxaFOBdapyA&usqp=CAU"),
    new TaskUser("Desenvolver Página de Login", "Desenvolver a página de login do aplicativo com autenticação de dois fatores.","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwPwUopN2Lbc2k9k7dqd2DBrcxaFOBdapyA&usqp=CAU"),
    new TaskUser("Redação de Artigo", "Escrever um artigo informativo sobre as últimas tendências em tecnologia de inteligência artificial.","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwPwUopN2Lbc2k9k7dqd2DBrcxaFOBdapyA&usqp=CAU")
  ]
  
  getTitleCompany() { 
    return this.titleCompany
  }
  
  get tasksDoing() { 
    return this.__tasksDoing
  }
}
