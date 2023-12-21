import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {Message} from "../../model/Message";

@Injectable({
  providedIn: 'root'
})
export class MessageSnackService extends Message {

  constructor(private snackBar: MatSnackBar) {
    super();
  }

  sucess(mensagem: string): void {
    this.openSnack(mensagem, ['success']);
  }

  error(mensagem: string): void {
    this.openSnack(mensagem, ['error']);
  }

  inform(mensagem: string): void {
    this.openSnack(mensagem, ['info']);
  }

  alert(mensagem: string): void {
    this.openSnack(mensagem, ['warning']);
  }

  private openSnack(mensagem: string, extraClasses: string[]): void {
    const config = new MatSnackBarConfig();
    config.duration = 5000;
    config.panelClass = extraClasses;
    this.snackBar.open(mensagem, 'X', config);
  }

}
