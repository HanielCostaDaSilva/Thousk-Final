import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { LoginUserComponent } from './user/login-user/login-user.component';
import { PrincipalPageComponent } from './principal-page/principal-page.component';

const routes: Routes = [
  {path:'RegisterUser',
  component: CreateUserComponent},
  {path:'Login',
  component: LoginUserComponent},
  {path:'PrincipalPage',
  component: PrincipalPageComponent}

];
/* const routes: Routes = [
  {
    path: 'cadastrousuario',
    component: MantemUsuarioComponent
  },
  {
    path: 'editausuario/:id',
    component: MantemUsuarioComponent
  },
  {
    path: 'listagemusuarios',
    component: ListagemUsuariosComponent
  },
  {
    path: 'listagemProfessor',
    component: ListarProfessorComponent
  },
  {
    path: 'listagemDisciplina',
    component: ListarDisciplinaComponent
  },
  {
    path: 'cadastrarDisciplina',
    component: CadastrarDisciplinaComponent
  },
  {
    path: 'cadastrarProfessor',
    component: CadastrarProfessorComponent
  }

];
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
