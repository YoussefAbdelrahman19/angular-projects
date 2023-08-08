// import { Component, OnInit } from '@angular/core';
// import { NavigationEnd, Router } from '@angular/router';
// import { SellerService } from '../../../Services/seller.service';
// import { TokenService } from '../../../Services/token.service';

// @Component({
//   selector: 'app-Header',
//   templateUrl: './Header.component.html',
//   styleUrls: ['./Header.component.css'],
// })
// export class HeaderComponent implements OnInit {
//   routePath: string = 'default';
//   private token: any;
//   userData: any;

//   constructor(private router: Router, private tokenServices: TokenService) {
//     // this.token = tokenServices.getToken();
//     // this.data = this.tokenServices.extractDataFromToken(this.token);
//     // console.log(this.data);
//   }
//   ngOnInit() {
//     this.tokenServices.tokenChange.subscribe((newToken: string | null) => {
//       const tkn = newToken ? newToken : '';
//       this.userData = this.tokenServices.extractDataFromToken(tkn);
//     });
//     this.router.events.subscribe((event: any) => {
//       if (event instanceof NavigationEnd && this.token) {
//         if (event.url.includes('seller')) {
//           this.routePath = 'seller';
//         } else {
//           this.routePath = 'default';
//         }
//       }
//     });
//     // if (!this.token || this.token === '') {
//     //   return;
//     // }

//     // this.router.events.subscribe((event: any) => {
//     //   if (!(event instanceof NavigationEnd)) {
//     //     return;
//     //   }

//     //   if (event.url.includes('seller')) {
//     //     this.routePath = 'seller';
//     //   } else {
//     //     this.routePath = 'default';
//     //   }
//     // });
//   }
//   logout() {
//     this.tokenServices.removeToken();
//   }
// }
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SellerService } from '../../../Services/seller.service';
import { TokenService } from '../../../Services/token.service';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css'],
})
export class HeaderComponent implements OnInit {
  routePath: string = 'default';
  private token: any;
  data: any;
  userData: any;

  constructor(private router: Router, private tokenService: TokenService) {}

  ngOnInit() {
    this.tokenService.tokenChange.subscribe((newToken: string | null) => {
      this.token = newToken;
      this.userData = this.tokenService.extractDataFromToken(this.token);
      this.updateRoutePath();
    });

    this.token = this.tokenService.getToken();
    this.data = this.tokenService.extractDataFromToken(this.token);
    this.updateRoutePath();
  }

  updateRoutePath() {
    if ( this.token !== '') {
      if (this.router.url.includes('seller')) {
        this.routePath = 'seller';
      } else {
        this.routePath = 'default';
      }
    }
  }
  logout() {
    this.tokenService.removeToken();
  }
}
