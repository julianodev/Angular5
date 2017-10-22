import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'ca-event-binding',
  templateUrl: './ca-event-binding.component.html',
  styleUrls: ['./ca-event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor (private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  showAlert(mensagem: string, title?: string): void {
    this.snackBar.open(mensagem, 'Event Binding' || title,
      {
        duration: 1000,
        direction: 'ltr',
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
  }
}
