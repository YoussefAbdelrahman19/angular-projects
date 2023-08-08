import { Component } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { IProduct } from 'src/app/Models/iproduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  constructor(private prodService: ProductsService, private router: Router) {}
  addProduct() {
    const newProd: IProduct = {
      name: 'Lenovo Laptop class 2 ',
      price: 20000,
      quantity: 35,
      imgURL: 'https://loremflickr.com/640/480/technics',
      categoryId: 3,

    };
    this.prodService.createProduct(newProd).subscribe((product) => {
      console.log('product fron add', product);
      this.router.navigateByUrl('/products');
    });
  }
}
