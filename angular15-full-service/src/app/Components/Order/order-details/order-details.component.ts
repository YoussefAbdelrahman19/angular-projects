import { IProduct } from '../../../../../Angular_RH_1-main/Angular_RH_1-main/src/app/ViewModel/ViewModel/iproduct';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { ProductsAPiService } from '../../../Services/products-api.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnInit, OnChanges {
  @Input() productId: any;
  @Output() totalPriceChanged: EventEmitter<number>;
  productList: IProduct[];
  totalPriceDetails: number = 0;
  constructor(
    private productService: ProductService,
    private prdAPIServices: ProductsAPiService
  ) {
    this.totalPriceChanged = new EventEmitter<number>();
  }

  check() {
    console.log('running');
  }

  ngOnChanges(): void {
    console.log('product Id in details:' + this.productId);
    console.log('List:' + this.getByProductId());
    this.check();
    this.getByProductId();
  }
  updateTotalAmount(pAmout: any, pPrice: any) {
    this.totalPriceDetails += pAmout * pPrice.Price;
    console.log('The Obj :' + pPrice);
    console.log('Total Price' + this.totalPriceDetails);
    this.totalPriceChanged.emit(this.totalPriceDetails);
  }

  ngOnInit(): void {
    this.productList = this.productService.getAllProducts();
  }
  getByProductId(): IProduct[] {
    return this.productService.getProductsByCatId(this.productId);
  }
}
