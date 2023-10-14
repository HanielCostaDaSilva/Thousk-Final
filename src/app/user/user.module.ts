import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    CreateUserComponent,
    LoginUserComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    
  ],
  exports:[
    CreateUserComponent,
    LoginUserComponent
  ]
})
export class UserModule { }
