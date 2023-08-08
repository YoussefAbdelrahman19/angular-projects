import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../Services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
})
export class SellerAddProductComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {}

  submitForm(data: object) {
    console.log('add product form submit', data);
    this.productService.addProduct(data).subscribe((res) => {
      if (res) {
        console.log('result', res);
        this.router.navigate(['seller/home']);
      }
    });
  }
}
