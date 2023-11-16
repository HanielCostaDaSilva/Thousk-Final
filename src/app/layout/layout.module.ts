import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import {  UserModule } from '../user/user.module';
 
@NgModule({
  declarations:[
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UserModule
    
  ],
  exports: [
    HeaderComponent,
  ]
})
export class LayoutModule { }
