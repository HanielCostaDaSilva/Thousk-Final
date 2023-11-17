import { Component, Input } from '@angular/core';
import Task from '../../shared/model/Task';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-window',
  templateUrl: './task-window.component.html',
  styleUrls: ['./task-window.component.css']
})
export class TaskWindowComponent{
   task!: Task;

  constructor(private route: ActivatedRoute){ }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const taskParam = params.get('task');
      this.task = taskParam ? JSON.parse(taskParam) : undefined;
    });
  }
}
