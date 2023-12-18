import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { UserPageComponent } from './user-page/user-page.component';
import { TaskModule } from "../task/task.module";
import { ShowUsersComponent } from './show-users/show-users.component';
import { UserBoxComponent } from './user-box/user-box.component';

@NgModule({
    declarations: [
        UserPageComponent,
        ShowUsersComponent,
        UserBoxComponent
    ],
    exports: [
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
