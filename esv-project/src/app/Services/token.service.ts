import { Injectable } from '@angular/core';
// import { ISeller } from '../Models/seller';
import { enviroment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ISeller } from '../Models/seller';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import  jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private tokenKey = 'authtoken';
  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);
  tokenChange: Observable<string | null> = this.tokenSubject.asObservable();
  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.tokenSubject.next(token);
  }
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
    this.tokenSubject.next(null);
  }
  extractDataFromToken(token: string): any {
    try {
      const decodedData = jwtDecode(token);
      return decodedData;
    } catch (error) {
      return null;
    }
  }

}
