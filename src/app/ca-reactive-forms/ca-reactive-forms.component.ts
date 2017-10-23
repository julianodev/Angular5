import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'ca-reactive-forms',
  templateUrl: './ca-reactive-forms.component.html',
  styleUrls: ['./ca-reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {


  form: FormGroup;
  hide: boolean = true;
  errors: Array<any> = new Array<any>();

  constructor (private fb: FormBuilder, private snackBar: MatSnackBar) {

    this.form = this.fb.group({
      nome: [null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.nullValidator
        ]],
      email: [null,
        [
          Validators.required,
          Validators.email,
          Validators.nullValidator,
          Validators.minLength(6)
        ]],
      password: [null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.nullValidator
        ]]

    });
  }

  ngOnInit() {
console.log(this.errors);
  }

  onSubmit(): void {
    this.showAlert('Formulario Enviado com sucesso', 'Reactive Forms');
    this.form.reset();
  }

  private showAlert(mensagem: string, title?: string): void {
    this.snackBar.open(mensagem, title || 'Angular 5',
      {
        duration: 1000,
        direction: 'ltr',
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
  }

  private validateInput(inputName: string): boolean {
    return !this.form.get(inputName).valid && this.form.get(inputName).touched;
  }

  private errorMessage(inputName: string): string {

    let message: string = null;


    switch (inputName) {
      case 'nome':
        message = this.form.get(inputName).hasError('required') ? 'O Nome é obrigatório' : '';
        this.errors.push(message);
        break;
      case 'email':
        message = this.form.get(inputName).hasError('required') ? 'Informe um e-mail' : this.form.get(inputName).hasError('email') ? 'O E-mail é inválido' : '';
        this.errors.push(message);
        break;
      case 'password':
        message = this.form.get(inputName).hasError('required') ? 'Informe a sua senha' : this.form.get(inputName).hasError('minlength') ? 'A senha deve ter mais de 6 digitos' : '';
        this.errors.push(message);
        break;

    }
    return message;

  }
}
