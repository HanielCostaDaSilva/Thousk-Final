import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import Task from '../../shared/model/Task';


export interface DialogData {
  title: string;
  description: string;
  imageLink: string;
}

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})

export class EditTaskComponent {

  @Input() task!: Task;


  constructor(public dialogRef: MatDialogRef<EditTaskComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.carregarData();
  }
  
  carregarData(){
    if (!this.data.title) {
      this.data.title = '';
    }
    if (!this.data.description) {
      this.data.description = '';
    }
    if (!this.data.imageLink) {
      this.data.imageLink = '';
    }
  }
  
  saveChanges() {
    this.dialogRef.close(this.data);
  }

  cancel() {
    this.dialogRef.close();
  }
}
