import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    RegisterUserComponent,
    LoginUserComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    
  ],
  exports:[
    RegisterUserComponent,
    LoginUserComponent
  ]
})
export class UserModule { }
