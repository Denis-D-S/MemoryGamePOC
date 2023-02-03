import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  title = 'memoryGamePOC';

  public user: any;
  public showSideNav!: boolean;
  public isLoggedIn: string = '';
  private subscription!: Subscription;

  constructor(private renderer: Renderer2) {
  }

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
