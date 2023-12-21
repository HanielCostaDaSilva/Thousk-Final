import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface OneInputDialogData {
  title: string;
  description: string;
  label: string;
  response: string;
}

@Component({
  selector: 'app-one-input-dialog',
  templateUrl: './one-input-dialog.component.html',
  styleUrls: ['./one-input-dialog.component.css']
})
export class OneInputDialogComponent {

  constructor(public dialogRef: MatDialogRef<OneInputDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: OneInputDialogData) { }

  confirm() {
    this.dialogRef.close(this.data);
  }

  cancel() {
    this.dialogRef.close();
  }
}