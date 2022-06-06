import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../shared/services/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  public onSubmitLogout (): void {
    this.loginService.logout();
  }
}
