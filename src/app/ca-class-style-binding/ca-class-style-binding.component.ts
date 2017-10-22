import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ca-class-style-binding',
  templateUrl: './ca-class-style-binding.component.html',
  styleUrls: ['./ca-class-style-binding.component.css']
})
export class ClassStyleBindingComponent implements OnInit {

  selectedValue: string = '';
  colorsTheme = [
    {
      value: 'basic',
      viewValue: 'Basic'
    },
    {
      value: 'primary',
      viewValue: 'Primary'
    }, {
      value: 'accent',
      viewValue: 'Accent'
    },
    {
      value: 'warn',
      viewValue: 'Warn'
    }
  ];
  constructor () { }

  ngOnInit() {
  }

}
