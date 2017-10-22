import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showProgressBar: boolean = false;
  showContainer: boolean = false;
  ngOnInit(): void {

    this.showProgressBar = true;
    setTimeout(() => {
      this.showProgressBar = false;
      this.showContainer = true;
    }, 1000);
  }


}
