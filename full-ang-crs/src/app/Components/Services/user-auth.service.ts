import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  isLoggedInCheckWithSubjectObservable: BehaviorSubject<boolean>;
  constructor() {
    this.isLoggedInCheckWithSubjectObservable = new BehaviorSubject<boolean>(
      false
    );
  }
  login(username: string, password: string) {
    let token = '123';
    this.isLoggedInCheckWithSubjectObservable.next(true);
    localStorage.setItem('token', token);
  }
  logout() {
    this.isLoggedInCheckWithSubjectObservable.next(false);

    localStorage.removeItem('token');
  }
  get isLoggedIn(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
  checkifLoggedIn(): Observable<boolean> {
    return this.isLoggedInCheckWithSubjectObservable.asObservable()   ;
  }
}
