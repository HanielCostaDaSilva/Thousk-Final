import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupBoxComponent } from './group-box/group-box.component';
import { ShowGroupComponent } from './show-group/show-group.component';
import { GroupPageComponent } from './group-page/group-page.component';
import { MaterialModule } from '../material/material.module';
import { TaskModule } from '../task/task.module';
import { CreateGroupComponent } from './create-group/create-group.component';



@NgModule({
  declarations: [
    GroupBoxComponent,
    ShowGroupComponent,
    GroupPageComponent,
    CreateGroupComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TaskModule
  ],
  exports:[
    GroupBoxComponent,
    ShowGroupComponent,
    GroupPageComponent,
    CreateGroupComponent
  ]
})
export class GroupsModule { }
