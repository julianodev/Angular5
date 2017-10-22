import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ca-toolbar',
  templateUrl: './ca-toolbar.component.html',
  styleUrls: ['./ca-toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  title: string = 'Curso de Angular 5';
  constructor () { }

  ngOnInit() {
  }

}
