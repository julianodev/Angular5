import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ca-template-driven',
  templateUrl: './ca-template-driven.component.html',
  styleUrls: ['./ca-template-driven.component.css'],

})
export class TemplateDrivenComponent implements OnInit {
  user: any = {
    name: null,
    email: null
  }
  constructor (private snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm): void {
    console.log(form);
    console.log(this.user, 'Informações do usuario');
    this.showAlert('Informações Salvas Com sucesso', 'Template Driven');

  }
  private showAlert(mensagem: string, title?: string): void {
    this.snackBar.open(mensagem.trim(), title.trim() || 'Angular 5',
      {
        duration: 1000,
        direction: 'ltr',
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
  }
}
