import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { MaterialModule } from '../material/material.module';
import { ComboUserComponent } from './combo-user/combo-user.component';
import { UserShowTaskComponent } from './user-show-task/user-show-task.component';
import { TaskModule } from "../task/task.module";

@NgModule({
    declarations: [
        RegisterUserComponent,
        LoginUserComponent,
        ComboUserComponent,
        UserShowTaskComponent
    ],
    exports: [
        RegisterUserComponent,
        LoginUserComponent,
        ComboUserComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        TaskModule
    ]
})
export  class UserModule { }
