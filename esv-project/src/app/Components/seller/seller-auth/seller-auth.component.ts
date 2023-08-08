import { Component, EventEmitter, OnInit } from '@angular/core';
import { SellerService } from '../../../Services/seller.service';
// import { ISeller } from 'src/app/Models/seller';
import { Router } from '@angular/router';
import { ISeller } from 'src/app/Models/seller';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  showLogin = false;
  // isAuthError = new EventEmitter<boolean>(false);
  registerError: string = '';
  loginError: string = '';

  constructor(private router: Router, private sellerService: SellerService) {}

  ngOnInit() {}
  signUp(seller: ISeller) {
    this.sellerService.register(seller).subscribe({
      next: (response) => {
        if (response) {
          const token = response.token;
          this.sellerService.storeToken(token);
          console.log('works');
          this.router.navigate(['seller/home']);
        }
      },
      error: (err) => {
        this.registerError = 'Error in Registeration ';
        console.log('error registering', err);
      },
    });
  }
  //sign in

  signIn(formData: any) {
    const { email, password } = formData;
    this.sellerService.login(email, password).subscribe({
      next: (response) => {
        if (response) {
          const token = response.token;
          this.sellerService.storeToken(token);
          console.log('works');
          this.router.navigate(['seller/home']);
        }
      },
      error: (err) => {
        this.loginError = 'Email or Password incorrect';

        console.log('error registering', err);
      },
    });
  }
  showLoginForm() {
    this.showLogin = true;
  }
  showRegisterForm() {
    this.showLogin = false;
  }
}
