import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../Services/user-auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css'],
})
export class UserAuthComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  myForm: FormGroup = new FormGroup({});
  constructor(private userAuthService: UserAuthService) {}
  ngOnInit(): void {
    this.isUserLoggedIn = this.userAuthService.isLoggedIn;
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    this.userAuthService.login('ali', '123');
    this.isUserLoggedIn = this.userAuthService.isLoggedIn;
  }
  logout() {
    this.userAuthService.logout();
    this.isUserLoggedIn = this.userAuthService.isLoggedIn;
  }
  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      // Perform further actions with the form data
    } else {
      // Handle invalid form
      console.log('invalid form',this.myForm);
    }
  }
}
