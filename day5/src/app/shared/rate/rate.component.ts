import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnChanges {
  @Input() rating: number = 0;
  rateWidth: number = 75;

  ngOnChanges(): void {
    this.rateWidth = this.rating * 75 / 5;
  }
}
