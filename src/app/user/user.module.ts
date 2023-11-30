import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { MaterialModule } from '../material/material.module';
import { UserPageComponent } from './user-page/user-page.component';
import { TaskModule } from "../task/task.module";
import { ShowUsersComponent } from './show-users/show-users.component';
import { UserBoxComponent } from './user-box/user-box.component';

@NgModule({
    declarations: [
        RegisterUserComponent,
        LoginUserComponent,
        UserPageComponent,
        ShowUsersComponent,
        UserBoxComponent
    ],
    exports: [
        RegisterUserComponent,
        LoginUserComponent,
        UserPageComponent,
        ShowUsersComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        TaskModule
    ]
})
export  class UserModule { }
