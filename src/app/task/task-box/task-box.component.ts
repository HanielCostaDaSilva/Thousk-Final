import { Input,Output, EventEmitter, Component  } from '@angular/core';
import { Router } from '@angular/router';
import Task from '../../shared/model/Task';

@Component({
  selector: 'app-task-box',
  templateUrl: './task-box.component.html',
  styleUrls: ['./task-box.component.css']
})
export class TaskBoxComponent {

  @Input() task!: Task;
  @Output() removeTaskEvent = new EventEmitter();
  @Output() editTaskEvent = new EventEmitter();

  constructor(private router: Router){
    
  }
  viewTask() {
       this.router.navigate(['/task', {task: this.task}]);
  }

  removeTask() {
    this.removeTaskEvent.emit(this.task);
  }

  editTask() {
    this.editTaskEvent.emit(this.task);
  }
}
