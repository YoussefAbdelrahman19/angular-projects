import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css'],
})
export class SellerHomeComponent implements OnInit {
  products: any[];
  searchForm: FormGroup;
  priceRangeForm: FormGroup;
  filterForm: FormGroup;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.products = [];
    this.searchForm = this.formBuilder.group({
      target: [''],
    });
    this.priceRangeForm = this.formBuilder.group({
      minPrice: [''],
      maxPrice: [''],
    });
    this.filterForm = this.formBuilder.group({
      category: [''],
      target: [''],
      minPrice: [''],
      maxPrice: [''],
    });
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts({}).subscribe((response) => {
      this.products = response.products;
    });
  }

  searchProducts(): void {
    const target = this.searchForm.value.target;
    this.productService
      .getproductsBySearch(target, {})
      .subscribe((response) => {
        this.products = response.products;
      });
  }

  filterProducts(): void {
    const { category, target, minPrice, maxPrice } = this.filterForm.value;
    this.productService
      .filterProduts(category, target, minPrice, maxPrice, {})
      .subscribe((response) => {
        this.products = response.products;
      });
  }

  getPriceRangeProducts(): void {
    const { minPrice, maxPrice } = this.priceRangeForm.value;
    this.productService
      .getProuctsByPriceRange(minPrice, maxPrice, {})
      .subscribe((response) => {
        this.products = response.products;
      });
  }
  deleteproduct(id: string) {
    this.productService.deleteProductById(id).subscribe((response) => {
      console.log(response);
      if (response) {
        this.getAllProducts();
      }
    });
  }
  editProduct(id: string) {
    console.log(id);
    this.router.navigate(['/seller/edit-product'], { queryParams: { id } });
  }
}
