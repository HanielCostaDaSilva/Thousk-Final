import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule

  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,

  ]
})
export class MaterialModule { }
