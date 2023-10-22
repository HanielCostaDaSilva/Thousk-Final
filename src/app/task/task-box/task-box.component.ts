import { Input,Output, EventEmitter, Component  } from '@angular/core';
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

  removeTask() {
    this.removeTaskEvent.emit(this.task);
  }

  editTask() {
    this.editTaskEvent.emit(this.task);
  }
}
