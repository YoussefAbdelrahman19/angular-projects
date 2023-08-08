import { Component } from '@angular/core';
import { StoreData } from 'src/app/Models/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  storeDate: StoreData;
  isImageDisplayed: boolean=true;

  constructor() {
    this.storeDate = new StoreData('store 1', 'https://picsum.photos/50/50', [
      'branch 1',
      'branch 2',
      'branch 3',
    ]);
  }
  toggleImage()
  {
    this.isImageDisplayed =!this.isImageDisplayed;
  }
}
