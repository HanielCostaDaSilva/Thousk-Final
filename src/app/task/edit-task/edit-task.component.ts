import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import Task from '../../shared/model/Task';


export interface DialogData {
  title: string;
  description: string;
  imageLink: string;
  dateStart: Date;
  dateFinal: Date;
  category: string;
}

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css','../../../styles.css']
})

export class EditTaskComponent {

  @Input() task!: Task;
  dateAtual !: Date;
  minDateFinal!:Date;


  constructor(public dialogRef: MatDialogRef<EditTaskComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.dateAtual = new Date();
    this.minDateFinal=this.dateAtual;
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
    this.data.dateStart= this.dateAtual;
    this.data.dateFinal= this.dateAtual;
  }
  
  saveChanges() {
    this.dialogRef.close(this.data);
  }

  cancel() {
    this.dialogRef.close();
  }
}
