import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { StaticProdutsService } from '../Services/static-produts.service';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  receivedProductId: number = 0;
  product: IProduct | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: StaticProdutsService,
    private location: Location,
    private prodService:ProductsService
  ) {}
  ngOnInit(): void {
    this.receivedProductId = Number(
      this.activatedRoute.snapshot.paramMap.get('pId')
    );
    this.product = this.productService.getProductById(this.receivedProductId);
    console.log(this.receivedProductId);
  }
  goBack() {
    this.location.back();
  }
  previousPrd()
  {

  }
  nextPrd()
  {

  }
}
