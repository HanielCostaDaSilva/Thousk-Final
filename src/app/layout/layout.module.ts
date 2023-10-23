import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { MenuSideBarComponent } from './menu-side-bar/menu-side-bar.component';
 
@NgModule({
  declarations:[
    HeaderComponent,
    MenuSideBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class LayoutModule { }
