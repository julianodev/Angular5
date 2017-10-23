import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'ca-input-properties',
  templateUrl: './ca-input-properties.component.html',
  styleUrls: ['./ca-input-properties.component.css']
})
export class InputPropertiesComponent  {

  constructor (private snackBar: MatSnackBar) { }

  private showAlert(mensagem: string, title?: string): void {
    this.snackBar.open(mensagem, title || 'Angular 5',
      {
        duration: 1000,
        direction: 'ltr',
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
  }
}
