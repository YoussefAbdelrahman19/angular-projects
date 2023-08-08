// import {Injectable} from '@angular/core';
// import { CanActivate, inject } from '@angular/router';

// @Injectable()
// export class AuthGuard implements CanActivate {

//   constructor(private auth: AuthService) {}

//   canActivate() {
//     return this.auth.isLoggedIn();
//   }

// }
import { CanActivateFn } from '@angular/router';
import { SellerService } from '../Services/seller.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const sellerService = inject(SellerService);
  const token = localStorage.getItem('authtoken');
  sellerService.getToken() && token === token
    ? console.log(true)
    : console.log(false);
  return sellerService.getToken() === token && token ? true : false;
};

// import {
//   CanActivate,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   Router,
// } from '@angular/router';
// import { Injectable } from '@angular/core';
// import { SellerService } from '../Services/seller.service';
// import { CanActivateFn } from '@angular/router';

// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(
//     private sellerService: SellerService,
//     private router: Router,
//   ) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): boolean {

//     return this.sellerService.isUserLoggedIn.value;
//   }
// }
