import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ca-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent  {

@Output() rated = new EventEmitter<number>(true);

rates : Array<number> = new Array(1,2,3,4,5);
rate : number = 0;

previousRate : number;

  private setRate(rate : number) : number {
    this.rate = rate;
    this.previousRate = undefined;
    this.rated.emit(this.rate);
    return this.rate;
  }

  private setTemporaryRate(rate : number): number {
    return this.previousRate === undefined ? this.previousRate = this.rate  : this.rate = rate;
  }

  private clearTemporaryRate() : void {
    this.previousRate !== undefined ? this.rate = this.previousRate : this.previousRate = undefined;
  }

  private setIcon(rate : number): string{
    return  rate <= this.rate ? 'star' : 'star_border' || rate > this.rate ? 'star_border' : 'star';
  }
}
