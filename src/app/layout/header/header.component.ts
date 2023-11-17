import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent{
  
  @Input() titleCompany !: string;
  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();
  
  //private _currentUser !: User| undefined

  constructor() {}

  toggleSidenav() {
    this.toggle.emit();
  }
}
