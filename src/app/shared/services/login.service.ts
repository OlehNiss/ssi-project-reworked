import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, take} from "rxjs";
import {ILogin} from "../models/login.interface";
import {Router} from "@angular/router";

const fakeJwtToken = 'fake-jwt-token';
const adminData = {
  userName: 'admin123',
  password: 'qwerty1$'
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public jwtToken = new BehaviorSubject<string | null>(null);

  constructor(private router: Router) { }

  public get getJwtToken(): string | null {
    let token = null;
    this.jwtToken.pipe(take(1)).subscribe(jwt => token = jwt )
    return token;
  }

  public autoLogin (): void {
    const jwtToken = JSON.parse(localStorage.getItem('jwtToken')!);

    if(jwtToken)
    {
      this.jwtToken.next(jwtToken);
    } else return
  }

  public login (formData: ILogin): Observable<string | null> {
    if (formData.userName === adminData.userName && formData.password === adminData.password) {
      this.jwtToken.next(fakeJwtToken);
      localStorage.setItem('jwtToken', JSON.stringify(fakeJwtToken));

      return of(fakeJwtToken);
    } else return of(null);
  };

  public logout (): void {
    localStorage.removeItem('jwtToken');
    this.jwtToken.next(null);
    this.router.navigate(['/login']);
  }
}
