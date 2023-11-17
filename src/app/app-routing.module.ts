import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { LoginUserComponent } from './user/login-user/login-user.component';
import { UserShowTaskComponent } from './user/user-show-task/user-show-task.component';
import { TaskWindowComponent }  from './task/task-window/task-window.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'RegisterUser', component: RegisterUserComponent},
  {path:'Login', component: LoginUserComponent},
  {path:'home', component: UserShowTaskComponent},
  {
    path: 'task/:task',
    component: TaskWindowComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
