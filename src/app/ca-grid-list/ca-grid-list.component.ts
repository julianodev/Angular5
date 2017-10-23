import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ca-grid-list',
  templateUrl: './ca-grid-list.component.html',
  styleUrls: ['./ca-grid-list.component.css']
})
export class GridListComponent implements OnInit {

  tiles = [
    {text: 'Primeira', cols: 3, rows: 1, color: '#2196F3'},
    {text: 'Two', cols: 1, rows: 2, color: '#F9A825'},
    {text: 'Three', cols: 1, rows: 1, color: '#558B2F'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
