import {Component, ElementRef, Renderer2, OnDestroy, OnInit, ViewChild} from '@angular/core';

import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {


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

  ////////////////////////////////////////////////////////////////////CODIGO JS ABAIXO COPIADO DO PEN CODE:

  //
  // var flipCheck = 0;
  //
  // function rotateCards() {
  //   if (flipCheck === 0) {
  //     document.getElementById("front-2").classList.add("showGreen");
  //     document.getElementById("back-2").classList.add("showRed");
  //
  //     document.getElementById("front-1").classList.add("showGreen");
  //     document.getElementById("back-1").classList.add("showRed");
  //
  //     flipCheck = 1;
  //
  //     setTimeout(function () {
  //       document.getElementById("front-4").classList.add("showGreen");
  //       document.getElementById("back-4").classList.add("showRed");
  //
  //       document.getElementById("front-3").classList.add("showGreen");
  //       document.getElementById("back-3").classList.add("showRed");
  //
  //       document.getElementById("front-5").classList.add("showGreen");
  //       document.getElementById("back-5").classList.add("showRed");
  //
  //       setTimeout(function () {
  //         document.getElementById("front-6").classList.add("showGreen");
  //         document.getElementById("back-6").classList.add("showRed");
  //
  //         document.getElementById("front-7").classList.add("showGreen");
  //         document.getElementById("back-7").classList.add("showRed");
  //       }, 500);
  //     }, 500);
  //   } else {
  //     document.getElementById("front-2").classList.remove("showGreen");
  //     document.getElementById("back-2").classList.remove("showRed");
  //
  //     document.getElementById("front-1").classList.remove("showGreen");
  //     document.getElementById("back-1").classList.remove("showRed");
  //
  //     flipCheck = 0;
  //
  //     setTimeout(function () {
  //       document.getElementById("front-3").classList.remove("showGreen");
  //       document.getElementById("back-3").classList.remove("showRed");
  //
  //       document.getElementById("front-4").classList.remove("showGreen");
  //       document.getElementById("back-4").classList.remove("showRed");
  //
  //       document.getElementById("front-5").classList.remove("showGreen");
  //       document.getElementById("back-5").classList.remove("showRed");
  //
  //       setTimeout(function () {
  //         document.getElementById("front-7").classList.remove("showGreen");
  //         document.getElementById("back-7").classList.remove("showRed");
  //
  //         document.getElementById("front-6").classList.remove("showGreen");
  //         document.getElementById("back-6").classList.remove("showRed");
  //       }, 500);
  //     }, 500);
  //   }
  // }
  //
  // setInterval(rotateCards, 3000); // Time in milliseconds

//////////////////////////////////////////////////////////////////// CODIGO TS DO CHAT GPT

  @ViewChild('front1') front1: ElementRef | undefined;
  @ViewChild('back1') back1: ElementRef | undefined;
  @ViewChild('front2') front2: ElementRef | undefined;
  @ViewChild('back2') back2: ElementRef | undefined;
  @ViewChild('front3') front3: ElementRef | undefined;
  @ViewChild('back3') back3: ElementRef | undefined;
  @ViewChild('front4') front4: ElementRef | undefined;
  @ViewChild('back4') back4: ElementRef | undefined;
  @ViewChild('front5') front5: ElementRef | undefined;
  @ViewChild('back5') back5: ElementRef | undefined;
  @ViewChild('front6') front6: ElementRef | undefined;
  @ViewChild('back6') back6: ElementRef | undefined;
  @ViewChild('front7') front7: ElementRef | undefined;
  @ViewChild('back7') back7: ElementRef | undefined;

  flipCheck = 0;
  // @ts-ignore
  rotateCards() {
    if (this.flipCheck === 0) {
      // @ts-ignore
      this.renderer.addClass(this.front2.nativeElement, 'showGreen');
      // @ts-ignore
      this.renderer.addClass(this.back2.nativeElement, 'showRed');

      // @ts-ignore
      this.renderer.addClass(this.front1.nativeElement, 'showGreen');
      // @ts-ignore
      this.renderer.addClass(this.back1.nativeElement, 'showRed');

      this.flipCheck = 1;

      setTimeout(() => {
        // @ts-ignore
        this.renderer.addClass(this.front4.nativeElement, 'showGreen');
        // @ts-ignore
        this.renderer.addClass(this.back4.nativeElement, 'showRed');

        // @ts-ignore
        this.renderer.addClass(this.front3.nativeElement, 'showGreen');
        // @ts-ignore
        this.renderer.addClass(this.back3.nativeElement, 'showRed');

        // @ts-ignore
        this.renderer.addClass(this.front5.nativeElement, 'showGreen');
        // @ts-ignore
        this.renderer.addClass(this.back5.nativeElement, 'showRed');

        setTimeout(() => {
          // @ts-ignore
          this.renderer.addClass(this.front6.nativeElement, 'showGreen');
          // @ts-ignore
          this.renderer.addClass(this.back6.nativeElement, 'showRed');

          // @ts-ignore
          this.renderer.addClass(this.front7.nativeElement, 'showGreen');
          // @ts-ignore
          this.renderer.addClass(this.back7.nativeElement, 'showRed');
        }, 500);
      }, 500);
    } else {
      // @ts-ignore
      this.renderer.removeClass(this.front2.nativeElement, 'showGreen');
      // @ts-ignore
      this.renderer.removeClass(this.back2.nativeElement, 'showRed');

      // @ts-ignore
      this.renderer.removeClass(this.front1.nativeElement, 'showGreen');
      // @ts-ignore
      this.renderer.removeClass(this.back1.nativeElement, 'showRed');

      this.flipCheck = 1;

      setTimeout(() => {
        // @ts-ignore
        this.front4.nativeElement.classList.add('showGreen');
        // @ts-ignore
        this.back4.nativeElement.classList.add('showRed');

        // @ts-ignore
        this.front3.nativeElement.classList.add('showGreen');
        // @ts-ignore
        this.back3.nativeElement.classList.add('showRed');

        // @ts-ignore
        this.front5.nativeElement.classList.add('showGreen');
        // @ts-ignore
        this.back5.nativeElement.classList.add('showRed');

        setTimeout(() => {
          // @ts-ignore
          this.front6.nativeElement.classList.add('showGreen');
          // @ts-ignore
          this.back6.nativeElement.classList.add('showRed');

          // @ts-ignore
          this.front7.nativeElement.classList.add('showGreen');
          // @ts-ignore
          this.back7.nativeElement.classList.add('showRed');
        }, 500);
      }, 500);
    // } else {
    //   // @ts-ignore
    //   this.front2.nativeElement.classList.remove('showGreen');
    //   // @ts-ignore
    //   this.back2.nativeElement.classList.remove('showRed');
    //
    //   // @ts-ignore
    //   this.front1.nativeElement.classList.remove('showGreen');
    //   // @ts-ignore
    //   this.back1.nativeElement.classList.remove('showRed');
    //
    //   this.flipCheck = 0;
    //
    //   setTimeout(() => {
    //     // @ts-ignore
    //     this.front3.nativeElement.classList.remove('showGreen');
    //     // @ts-ignore
    //     this.back3.nativeElement.classList.remove('showRed');
    //
    //     // @ts-ignore
    //     this.front4.nativeElement.classList.remove('showGreen');
    //     // @ts-ignore
    //     this.back4.nativeElement.classList.remove('showRed');
    //
    //     // @ts-ignore
    //     this.front5.nativeElement.classList.remove('showGreen');
    //     // @ts-ignore
    //     this.back5.nativeElement.classList.remove('showRed');
    //
    //     setTimeout(() => {
    //       // @ts-ignore
    //       this.front7.nativeElement.classList.remove('showGreen');
    //       // @ts-ignore
    //       this.back7.nativeElement.classList.remove('showRed');
    //
    //       // @ts-ignore
    //       this.front6.nativeElement.classList.remove('showGreen');
    //       // @ts-ignore
    //       this.back6.nativeElement.classList.remove('showRed');
    //     }, 500);
    //   }, 500);
    // }

      }
  }
}
