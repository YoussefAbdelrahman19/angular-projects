import { EventEmitter, Injectable } from '@angular/core';
// import { ISeller } from '../Models/seller';
import { enviroment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ISeller } from '../Models/seller';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenService } from './token.service';
import { query } from '@angular/animations';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly apiurl = enviroment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService
  ) {}
  getAllProducts(query: any): Observable<any> {
    return this.http.get(`${this.apiurl}/products`, { params: query });
  }
  getProuctsByPriceRange(
    minPrice: number,
    maxPrice: number,
    query: any
  ): Observable<any> {
    const params = {
      minPrice: minPrice.toString(),
      maxPrice: maxPrice.toString,
      ...query,
    };
    return this.http.get(`${this.apiurl}/products/price`, params);
  }
  getproductsBySearch(target: string, query: any): Observable<any> {
    const params = { target, ...query };
    return this.http.get(`${this.apiurl}/products/search`, params);
  }

  getProductsByCategory(category: string, query: any): Observable<any> {
    return this.http.get(`${this.apiurl}/products/category/${category}`, {
      params: query,
    });
  }
  getProductsByStockState(state: string, query: any): Observable<any> {
    return this.http.get(`${this.apiurl}/products/${state}`, { params: query });
  }
  getProductById(id: string): Observable<any> {
    return this.http.get(`${this.apiurl}/products/${id}`);
  }
  addProduct(product: any): Observable<any> {
    const url = `${this.apiurl}/products`;
    console.log(product);
    return this.http.post(url, product);
  }

  updateProductById(id: string, product: any): Observable<any> {
    return this.http.put(`${this.apiurl}/products/${id}`, product);
  }
  deleteProductById(id: string): Observable<any> {
    return this.http.delete(`${this.apiurl}/products/${id}`);
  }
  filterProduts(
    category: string,
    target: string,
    minPrice: number,
    maxPrice: number,
    query: any
  ): Observable<any> {
    const params = {
      category,
      target,
      minPrice: minPrice.toString(),
      maxPrice: maxPrice.toString(),
      ...query,
    };
    return this.http.get(`${this.apiurl}/products/filter`, params);
  }
}
