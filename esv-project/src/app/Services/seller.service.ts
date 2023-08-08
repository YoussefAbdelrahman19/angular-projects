import { EventEmitter, Injectable } from '@angular/core';
// import { ISeller } from '../Models/seller';
import { enviroment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ISeller } from '../Models/seller';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root',
})
export class SellerService {
  private readonly apiurl = enviroment.apiUrl;

  isUserLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService
  ) {}
  register(seller: ISeller): Observable<any> {
    const url = `${this.apiurl}/users`;
    console.log(seller);

    return this.http.post(url, seller);
  }
  login(email: string, password: string): Observable<any> {
    const url = `${this.apiurl}/users/signin`;
    return this.http.post(url, { email, password });
  }
  storeToken(token: string): void {
    this.tokenService.saveToken(token);
  }
  getToken(): string | null {
    return this.tokenService.getToken();
  }

  removeToken(): void {
    this.tokenService.removeToken();
  }
  getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
}
