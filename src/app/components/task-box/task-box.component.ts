import { Component, Input } from '@angular/core';
import TaskUser from 'src/model/TaskUser';

@Component({
  selector: 'app-task-box',
  templateUrl: './task-box.component.html',
  styleUrls: ['./task-box.component.css']
})
export class TaskBoxComponent {

  
  @Input() title: string =""; 
  @Input() description: string =""; 
  @Input() imageLink: string ="";
}
