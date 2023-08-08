import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../Services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private userAuthService: UserAuthService) {}
  ngOnInit(): void {
    // this.isLoggedIn = this.userAuthService.isLoggedIn;
    // this.isLoggedIn = this.userAuthService.isLoggedIn;
    this.userAuthService.isLoggedInCheckWithSubjectObservable.subscribe(
      (result) => (this.isLoggedIn = result)
    );
  }
  login() {
    this.userAuthService.login('ali', '123');
  }
  logout() {
    this.userAuthService.logout();
  }
}
