import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './auth/register-user/register-user.component';
import { LoginUserComponent } from './auth/login-user/login-user.component';
import { ShowUsersComponent } from './user/show-users/show-users.component';
import { UserPageComponent } from './user/user-page/user-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'RegisterUser', component: RegisterUserComponent},
  {path:'Login', component: LoginUserComponent},
  {path:'home', component: ShowUsersComponent},
  {path:'user/:userId', component: UserPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
