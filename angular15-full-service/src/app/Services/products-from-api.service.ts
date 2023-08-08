import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsFromApiService {

  constructor(private http: HttpClient) {

  }
  getAllPosts() {
    return this.http.get(`${environment.API_Url}/posts`)
  }
}
