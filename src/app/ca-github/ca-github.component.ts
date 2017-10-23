import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'ca-github',
  templateUrl: './ca-github.component.html',
  styleUrls: ['./ca-github.component.css']
})
export class GithubComponent implements OnInit {

  users : Array<any> = [];
  showProgressBar: boolean = false;
  constructor(private gitHubService : GithubService) { }


  ngOnInit() {

  }

  getUsers() : void {
    this.showProgressBar = true;

    (this.gitHubService.getUsers()
    .subscribe(
      (user : any) => {
        this.showProgressBar = false;
        this.users = user;
        console.log(this.users)
      }));
  }
}
