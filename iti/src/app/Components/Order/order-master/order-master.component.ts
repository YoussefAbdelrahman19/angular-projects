import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductListComponent } from '../../product-list/product-list.component';
import { StaticProdutsService } from '../../Services/static-produts.service';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css'],
})
export class OrderMasterComponent implements AfterViewInit, OnInit {
  selectedCategoryId: number = 0;
  productList: IProduct[] = [];
  categoryList: ICategory[] = [];
  orderTotalPrice: number = 0;
  // inputName:ElementRef = {} as ElementRef;
  // inputName:ElementRef = {} as ElementRef;
  // inputName?:ElementRef ;
  //  inputName:ElementRef|undefined = undefined;
  //  inputName:ElementRef|null = null;
  // inputName?:ElementRef ; optional
  @ViewChild('nameInputValue') inputName!: ElementRef; //none- null value any type not null
  @ViewChild(ProductListComponent) prodListComponent!: ProductListComponent;

  productListOfCateogries: IProduct[] = [];

  constructor(private productsService: StaticProdutsService) {
    this.categoryList = [
      { id: 1, name: 'Labtop class 1' },
      { id: 2, name: 'Labtop class 2' },
      { id: 3, name: 'Labtop class 3' },
      { id: 4, name: 'Mobil class 1' },
      { id: 5, name: 'Mobil class 2' },
    ];
  }
  ngOnInit(): void {
    this.productList = this.productsService.getAllPrdoducts();
    this.productListOfCateogries = this.productsService.getAllPrdoducts();
  }
  ngAfterViewInit(): void {
    this.inputName.nativeElement.value = 'hello world';
    this.inputName.nativeElement.style.border = '1px solid black';
    this.prodListComponent.productListOfCateogries = [];
    console.log('all compnents ts', this.prodListComponent);
  }
  onSelectChange() {
    this.productListOfCateogries = this.productList.filter(
      (product) => product.id == this.selectedCategoryId
    );
  }
  changeTotalPrice(totalPrice: number) {
    {
      this.orderTotalPrice = totalPrice;
    }
  }
}
