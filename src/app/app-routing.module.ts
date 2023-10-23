import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { LoginUserComponent } from './user/login-user/login-user.component';
import { PrincipalPageComponent } from './principal-page/principal-page.component';

const routes: Routes = [
  {path:'RegisterUser',
  component: RegisterUserComponent},
  {path:'Login',
  component: LoginUserComponent},
  {path:'PrincipalPage',
  component: PrincipalPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
