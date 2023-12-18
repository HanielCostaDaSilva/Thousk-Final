import { Input, Output, EventEmitter, Component } from '@angular/core';
import Task from '../../shared/model/Task';

@Component({
  selector: 'app-task-box',
  templateUrl: './task-box.component.html',
  styleUrls: ['./task-box.component.css', '../../styles.css']
})
export class TaskBoxComponent {

  @Input() task!: Task;
  @Output() changeTaskStateEvent = new EventEmitter();
  @Output() removeTaskEvent = new EventEmitter();
  @Output() editTaskEvent = new EventEmitter();

  constructor() {
  }
  changeTaskState() {
    this.changeTaskStateEvent.emit(this.task);
  }

  removeTask() {
    this.removeTaskEvent.emit(this.task);
  }

  editTask() {
    this.editTaskEvent.emit(this.task);
  }


}
