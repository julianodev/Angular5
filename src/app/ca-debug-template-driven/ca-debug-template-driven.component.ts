import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ca-debug-template-driven',
  templateUrl: './ca-debug-template-driven.component.html',
  styleUrls: ['./ca-debug-template-driven.component.css']
})
export class DebugTemplateDrivenComponent implements OnInit {

  @Input() form: NgForm;
  constructor () { }

  ngOnInit() {
    console.log('Form => ', this.form);
  }

}
