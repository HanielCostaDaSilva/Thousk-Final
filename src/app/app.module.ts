import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import TaskService from './shared/service/task/task.service';
import { HttpClientModule } from '@angular/common/http';

import { ThouskFirestoreModule } from './thouskFirestore/ThouskFirestore.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    TaskModule,
    UserModule,
    ThouskFirestoreModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
