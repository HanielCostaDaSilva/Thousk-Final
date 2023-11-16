import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { MaterialModule } from '../material/material.module';
import { ComboUserComponent } from './combo-user/combo-user.component';

@NgModule({
  declarations: [
    RegisterUserComponent,
    LoginUserComponent,
    ComboUserComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    
  ],
  exports:[
    RegisterUserComponent,
    LoginUserComponent,
    ComboUserComponent
  ]
})
export  class UserModule { }
