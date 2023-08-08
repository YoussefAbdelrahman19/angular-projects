import { Injectable } from '@angular/core';
import { IProduct } from '../../../Angular_RH_1-main/Angular_RH_1-main/src/app/ViewModel/ViewModel/iproduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct2 } from '../ViewModel/ViewModel/iproduct2';

@Injectable({
  providedIn: 'root',
})
export class ProductsAPiService {
  constructor(private httpClient: HttpClient) {}

  //you have to create fn to get all products
  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>('http://localhost:3000/products');
  }
  //   //return all products with the same id
  getProductsByCatId(catId: number): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      `http://localhost:3000/products?catId=${catId}`
    );
  }
  //   //return ?catIdone product
  //   getProductById(proId: number) {
  //     return this.productList.find((c) => c.Id == proId);
  //   }
  //   addNewProduct(product: IProduct) {}
  //   updateProduct(prdId: number, newProduct: IProduct) {}
  //   deleteProduct(prdId: number) {}
  // }
}
