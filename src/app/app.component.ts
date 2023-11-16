import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Thousk';
  openMenu = false;
  
  toggleSidenavBar(){
    this.openMenu = !this.openMenu;
  }
}
