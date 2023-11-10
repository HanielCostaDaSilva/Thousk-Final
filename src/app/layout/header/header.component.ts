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
  
  private _currentUser !: User| undefined

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => this._currentUser = user);
  }
  
  get currentUser(){
    return this._currentUser
  }

  toggleSidenav() {
    this.toggle.emit();
  }
}
