import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TaskModule } from './task/task.module';
import { HomePageComponent } from './home-page/home-page.component';
import { UserModule } from './user/user.module';
import AuthService from './shared/service/auth/auth.service';
import TaskService from './shared/service/task/task.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    TaskModule,
    UserModule
  ],
  providers: [AuthService,TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
