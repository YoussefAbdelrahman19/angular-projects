import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticProdutsService {
  private productList: IProduct[];
  categoryList: ICategory[];
  productListOfCateogries: IProduct[] = [];
  text: string = 'hello world here and I will enjoy your products';
  price: number = 1000;
  todayDate: Date = new Date();
  orderTotaPrice: number = 2;
  @Input() recivedCategoryId: number = 0;
  @Output() onTotalPriceChanged: EventEmitter<number>;
  isContainedBsClass: boolean = true;

  constructor() {
    this.onTotalPriceChanged = new EventEmitter<number>();
    this.categoryList = [
      { id: 1, name: 'Labtop class 1' },
      { id: 2, name: 'Labtop class 2' },
      { id: 3, name: 'Labtop class 3' },
      { id: 4, name: 'Mobil class 1' },
      { id: 5, name: 'Mobil class 2' },
    ];
    this.productList = [
      {
        id: 1,
        name: 'Lenovo Laptop',
        price: 20000,
        quantity: 35,
        imgURL: 'https://loremflickr.com/640/480/technics',
        categoryId: 1,
      },
      {
        id: 2,
        name: 'Dell Laptop',
        price: 30000,
        quantity: 36,
        imgURL: 'https://loremflickr.com/640/480/technics',
        categoryId: 1,
      },
      {
        id: 3,
        name: 'Inspiro Laptop',
        price: 40000,
        quantity: 88,
        imgURL: 'https://loremflickr.com/640/480/technics',
        categoryId: 5,
      },
      {
        id: 4,
        name: 'HP Laptop',
        price: 50000,
        quantity: 99,
        imgURL: 'https://loremflickr.com/640/480/technics',
        categoryId: 6,
      },
      {
        id: 5,
        name: 'Samsung Phone',
        price: 12000,
        quantity: 220,
        imgURL: 'https://loremflickr.com/640/480/technics',
        categoryId: 4,
      },
      {
        id: 2,
        name: 'OPPO Phone',
        price: 23000,
        quantity: 98,
        imgURL: 'https://loremflickr.com/640/480/technics',
        categoryId: 2,
      },
      {
        id: 2,
        name: 'Huwawi Phone',
        price: 56000,
        quantity: 69,
        imgURL: 'https://loremflickr.com/640/480/technics',
        categoryId: 1,
      },
      {
        id: 1,
        name: 'Nokia Phone',
        price: 7500,
        quantity: 78,
        imgURL: 'https://loremflickr.com/640/480/technics',
        categoryId: 3,
      },
    ];
    this.productListOfCateogries = this.productList;
  }
  getAllPrdoducts(): IProduct[] {
    return this.productList;
  }
  getProductById(id: number): IProduct | null {
    let product = this.productList.find((prod) => prod.id === id);
    return product ? product : null;
  }
  getProductsByCatId(catId: number): IProduct[] {
    if (catId == 0) {
      return this.productList;
    } else {
      // return this.productList.find((prod) => prod.categoryId === catId);
      return this.productList.filter((prod) => prod.categoryId === catId);
    }
  }
  buy(itemPrice: number, count: any) {
    this.orderTotaPrice = itemPrice * count;
    this.onTotalPriceChanged.emit(this.orderTotaPrice);
  }
  onSelectChange() {
    if (this.recivedCategoryId == 0) {
      this.productListOfCateogries == this.productList;
    } else {
      this.productListOfCateogries = this.productList.filter(
        (product) => product.id == this.recivedCategoryId
      );
    }
  }
  ngOnChanges() {
    this.onSelectChange();
  }
  trackproductById(index: number, prod: IProduct): any {
    return prod.id;
  }
}
