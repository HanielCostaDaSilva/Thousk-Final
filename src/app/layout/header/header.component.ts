import { Component, Input, OnInit } from '@angular/core';
import  AuthService from '../../shared/service/auth/auth.service';
import User from '../../shared/model/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{
  
  @Input() titleCompany !: string;
  
  
  private __currentUser !: User| undefined

  constructor(private authService: AuthService) {}

  get currentUser(){
    return this.__currentUser
  }

  ngOnInit(): void {
    this.__currentUser= this.authService.currentUser
  }
  

}
