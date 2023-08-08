import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../Services/product.service';
import { Product } from '../../../Models/product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  productData: Product | null = null;

  productId: string = '';
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params) {
        this.productId = params['id'];
      }
    });
    this.productService.getProductById(this.productId).subscribe((response) => {
      console.log('response in edit',response);
      this.productData = response.product;
    });
  }
  updateProduct(formData: any) {}
  getProductById(id: string) {
    this.productService.getProductById(id).subscribe((response) => {
      console.log('response in update', response);
    });
  }
}
