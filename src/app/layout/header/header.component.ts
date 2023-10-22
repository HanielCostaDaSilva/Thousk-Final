import { Component, Input } from '@angular/core';
import  AuthService from '../../shared/service/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent{
  
  @Input() titleCompany !: string;
  
  private authService: AuthService = new AuthService();
  
  private __currentUser= this.authService.currentUser;

  constructor() {}

  get currentUser(){
    return this.__currentUser
  }

  

}
