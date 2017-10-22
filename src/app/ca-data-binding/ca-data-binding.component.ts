import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ca-data-binding',
  templateUrl: './ca-data-binding.component.html',
  styleUrls: ['./ca-data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  text: string = "Olá,"
  urlGitHub: string = 'https://github.com/julianodev';

  imageUrl: string = 'http://lorempixel.com/400/200/';

  courseAngular: boolean = true;
  constructor () { }

  ngOnInit() {
  }

  likeCourse(): boolean {
    return true;
  }
  getValor(numero: number): number {
    return numero;
  }

}
