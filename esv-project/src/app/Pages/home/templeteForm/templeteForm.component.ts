import { Component, OnInit } from '@angular/core';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}
interface ProductForm {
  name: string;
  quantity: number;
  price: number;
  img: string;
  category: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './TempleteForm.component.html',
})
export class HomeComponent implements OnInit {
  selectedItem: any;
  suggestions: any[]; // Replace 'any[]' with the appropriate type of your suggestions array.
  date: Date | undefined;
  first = 0;
  rows = 10;
  prodForm: ProductForm = {} as ProductForm;
  products: Array<any> = [];
  constructor() {
    this.suggestions = [1, 2, 4, 5, 6];
  }

  ngOnInit() {
    this.products = [
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 10, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 122, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
      { code: 1, name: 'product 1 ', quantity: 10, category: 'p1' },
    ];
  }
  search(event: AutoCompleteCompleteEvent) {
    this.suggestions = [...Array(10).keys()].map(
      (item) => event.query + '-' + item
    );
  }
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.products
      ? this.first === this.products.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.products ? this.first === 0 : true;
  }
  submitForm(e: any) {
    console.log('form submitted', e);
    console.log('form submitted', e.target.value);
  }
  onSelectedFile(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    if (inputElement?.files?.length) {
      console.log('inputElement.files[0]', inputElement.files[0]);
      this.prodForm.img = inputElement.files[0].name;
    }
  }
}
