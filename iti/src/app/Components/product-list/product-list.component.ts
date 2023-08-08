import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { StaticProdutsService } from '../Services/static-produts.service';
import { Router } from '@angular/router';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnChanges, OnInit {
  productList: IProduct[] = [];
  productListOfCateogries: any = [];
  text: string = 'hello world here and I will enjoy your products';
  price: number = 1000;
  todayDate: Date = new Date();
  orderTotaPrice: number = 2;
  @Input() recivedCategoryId: number = 0;
  @Output() onTotalPriceChanged: EventEmitter<number>;
  isContainedBsClass: boolean = true;

  constructor(
    private productsService: StaticProdutsService,
    private router: Router,
    private prodService: ProductsService
  ) {
    this.onTotalPriceChanged = new EventEmitter<number>();
    //this.productList = this.productsService.getAllPrdoducts();
    //console.log('   this.productList ', this.productList);
  }
  buy(itemPrice: number, count: any) {
    this.orderTotaPrice = itemPrice * count;
    this.onTotalPriceChanged.emit(this.orderTotaPrice);
  }
  ngOnInit(): void {
    this.productList = this.productsService.getAllPrdoducts();
    // this.productListOfCateogries = this.productsService.getAllPrdoducts();
    this.prodService.getAllProducts().subscribe((products) => {
      this.productListOfCateogries = products;
    },err=>console.log(err));
  }

  ngOnChanges() {
    this.onSelectChange();
    this.productListOfCateogries =
      this.recivedCategoryId == 0
        ? this.productsService.getAllPrdoducts()
        : this.productsService.getProductsByCatId(this.recivedCategoryId);
  }
  onSelectChange() {
    if (this.recivedCategoryId == 0) {
      this.productListOfCateogries = this.productsService.getAllPrdoducts(); // Use assignment operator here
    } else {
      this.productListOfCateogries = this.productsService.getProductsByCatId(
        this.recivedCategoryId
      );
    }
  }

  productDetails(pId: number) {
    // this.router.navigateByUrl(`/products/${pId}`);
    this.router.navigate(['products', pId]);
  }

  trackproductById(index: number, prod: IProduct): any {
    return prod.id;
  }
}
