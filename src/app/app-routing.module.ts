import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './auth/register-user/register-user.component';
import { LoginUserComponent } from './auth/login-user/login-user.component';
import { ShowUsersComponent } from './user/show-users/show-users.component';
import { UserPageComponent } from './user/user-page/user-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ShowGroupComponent } from './groups/show-group/show-group.component';
import { GroupPageComponent } from './groups/group-page/group-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'register', component: RegisterUserComponent},
  {path:'login', component: LoginUserComponent},
  {path:'home', component: HomePageComponent},
  {path:'users', component: ShowUsersComponent},
  {path:'groups', component: ShowGroupComponent},
  {path:'user/:userId', component: UserPageComponent},
  {path:'group/:groupId', component: GroupPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
