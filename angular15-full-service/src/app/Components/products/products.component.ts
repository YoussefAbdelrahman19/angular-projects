import { Component, OnInit } from '@angular/core';
import { ProductsAPiService } from '../../Services/products-api.service';
import { IProduct } from '../../../../Angular_RH_1-main/Angular_RH_1-main/src/app/ViewModel/ViewModel/iproduct';
import { IProduct2 } from './../../ViewModel/ViewModel/iproduct2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  prodList: any[] = [];
  prodById: any[] = [];
  prodId: number = 3;
  constructor(private prodApiService: ProductsAPiService) {}

  ngOnInit(): void {
    this.prodApiService.getAllProducts().subscribe((prods) => {
      this.prodList = prods;
      console.log(this.prodList);
    });
    this.prodApiService.getProductsByCatId(this.prodId).subscribe((prods) => {
      console.log(prods);
      // console.log(this.prodById);
    });
  }
  updateTotalAmount() {}
}
