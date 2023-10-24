import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import  AuthService from '../../shared/service/auth/auth.service';
import User from '../../shared/model/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{
  
  @Input() titleCompany !: string;
  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();
  
  private __currentUser !: User| undefined

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.__currentUser= this.authService.currentUser
  }
  
  get currentUser(){
    return this.__currentUser
  }

  toggleSidenav() {
    this.toggle.emit();
  }
}
