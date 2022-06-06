import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {LoginService} from "./shared/services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'testProject1';
  public showHeader = false;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe(event => this.modifyHeader(event.url));
  }

  ngOnInit (): void {
    this.loginService.autoLogin();
  }

  modifyHeader(currentUrl: string) {
    this.showHeader = currentUrl !== '/login';
  }
}
