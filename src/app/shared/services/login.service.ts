import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {ILogin} from "../models/login.interface";
import {Router} from "@angular/router";

const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
const adminData = {
  userName: 'admin123',
  password: 'qwerty1$'
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user = new BehaviorSubject<ILogin | null>(null);

  constructor(private router: Router) { }

  public login (formData: ILogin): Observable<string | null> {
    if (formData.userName === adminData.userName && formData.password === adminData.password) {
      this.user.next(formData);
      localStorage.setItem('jwtToken', JSON.stringify(jwtToken));

      return of(jwtToken);
    } else return of(null);
  };

  public logout (): void {
    localStorage.removeItem('jwtToken');
    this.user.next(null);
    this.router.navigate(['/login'])
  }
}
