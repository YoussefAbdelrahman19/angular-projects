import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProduct } from 'src/app/Models/iproduct';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  httpOptions;

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  getAllProducts() {
    return this.httpClient.get(`${environment.API_URL}/products`);
  }

  getProductById() {
    // Implement the logic to get a product by ID
  }

  getProductByCatId() {
    // Implement the logic to get a product by category ID
  }

  createProduct(product: IProduct): Observable<IProduct> {
    return this.httpClient
      .post<IProduct>(
        `${environment.API_URL}/products`,
        JSON.stringify(product),
        this.httpOptions
      )
      .pipe(
        retry(2),
        catchError((error:any) => {
          console.error(error);
          return throwError(() =>
            Error('An error occurred while creating the product.')
          );
        })
      );
  }

  updateProduct() {
    // Implement the logic to update a product
  }

  deleteProduct() {
    // Implement the logic to delete a product
  }
}
