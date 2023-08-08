import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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
  seller: {
    name: string;
    age: number;
  };
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productForm: FormGroup;
  validatros = [Validators.required, Validators.pattern('[A-Z]{2,}')];

  // this.productForm = new FormGroup({
  //   name: new FormControl('prod 1',this.validatros),
  //   quantity: new FormControl('',this.validatros),
  //   price: new FormControl(''),
  //   img: new FormControl(''),
  //   category: new FormControl(''),
  //   seller: new FormGroup({
  //     name: new FormControl('seller name'),
  //     age: new FormControl('seller age'),
  //   }),
  // });
  constructor(private fb: FormBuilder) {
    this.productForm = fb.group({
      name: ['prod 1'],
      quantity: [''],
      price: [''],
      img: [''],
      category: [''],
      seller: fb.group({
        name: ['seller name'],
        age: ['seller age'],
      }),

      referal:[''],
      referalOther:[''],
    });
  }
  fillForm() {
    this.productForm.patchValue({
      name: 'filled Name',
      quantity: 'filled Qunit Quantity',
      category: ['productForm'],
      seller: {
        name: 'seller name filled',
        age: 50,
      },
    });
  }
  ngOnInit() {}

  submitForm(e: any) {
    console.log('form event', this.productForm.value);
    console.log('e.value', e.value);
    console.log('e', e);
  }
  get name() {
    return this.productForm.get('name');
  }
  get price() {
    return this.productForm.get('price');
  }
  onSelectedFile(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    if (inputElement?.files?.length) {
      console.log('inputElement.files[0]', inputElement.files[0]);
      // this.prodForm.img = inputElement.files[0].name;
    }
  }
}
