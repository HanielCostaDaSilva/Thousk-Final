import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import User from '../../shared/model/User';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.css']
})
export class UserBoxComponent {

  @Input() user !: User;

  constructor(private router: Router) {

  }
  
  viewUser(id: string) {
    this.router.navigate(['/user', { userId: id }]);
  }
  }
