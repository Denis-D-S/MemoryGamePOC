import {Component, OnDestroy, OnInit} from '@angular/core';

import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{


  title = 'memoryGamePOC';

  public user: any;
  public showSideNav!: boolean;
  public isLoggedIn: string = '';
  private subscription!: Subscription;

  constructor() {}

  async ngOnInit() {
    this.isLoggedIn = '';

    if (this.isLoggedIn) {
      console.log('User is logged in');
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public login() {
    this.isLoggedIn = 'true';
    console.log('User is logged in');
    //logic to redirect to dashboard...
    //redirectUri: 'http://localhost:4200/dashboard';
  }

  public logout() {
    this.isLoggedIn = '';
    console.log('User is logged out');
  }

  toggleSideNav() {
    this.showSideNav = !this.showSideNav;
  }
}
