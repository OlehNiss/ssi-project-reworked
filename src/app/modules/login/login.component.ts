import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../../shared/helpers/customValidators";
import {LoginService} from "../../shared/services/login.service";
import {take} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern(CustomValidators.PASSWORD)
      ]],
    })
  }

  public login (): void {
    if(this.loginForm.valid) {
      this.loginService
        .login(this.loginForm.value)
        .pipe(take(1))
        .subscribe(
          jwtToken => {
            if (jwtToken) {
              console.log(jwtToken);
              this.router.navigate(['/list']);
            } else {
              this.loginForm.setErrors({wrongCredentials: true});
            }
          }
        )
    }
  }
}
