import { Component, ElementRef, Renderer2, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-flipping-cards',
  templateUrl: './flipping-cards.component.html',
  styleUrls: ['./flipping-cards.component.scss']
})
export class FlippingCardsComponent implements OnInit, OnDestroy {
  @ViewChild('front-1') front1?: ElementRef
  @ViewChild('back-1') back1?: ElementRef
  @ViewChild('front-2') front2?: ElementRef
  @ViewChild('back-2') back2?: ElementRef
  @ViewChild('front-3') front3?: ElementRef
  @ViewChild('back-3') back3?: ElementRef
  @ViewChild('front-4') front4?: ElementRef
  @ViewChild('back-4') back4?: ElementRef
  @ViewChild('front-5') front5?: ElementRef
  @ViewChild('back-5') back5?: ElementRef
  @ViewChild('front-6') front6?: ElementRef
  @ViewChild('back-6') back6?: ElementRef
  @ViewChild('front-7') front7?: ElementRef
  @ViewChild('back-7') back7?: ElementRef

  cards = [];
  flipCheck = 0;
  intervalId: any | undefined;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      console.log('O setInterval rodou! Vamos tentar rotacionar as cartas!')
      this.rotateCards();
    }, 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  ngAfterViewInit() {
    // @ts-ignore
    this.cards = [
      { front: this.front1, back: this.back1 },
      { front: this.front2, back: this.back2 },
      { front: this.front3, back: this.back3 },
      { front: this.front4, back: this.back4 },
      { front: this.front5, back: this.back5 },
      { front: this.front6, back: this.back6 },
      { front: this.front7, back: this.back7 }
    ].filter(card => !!card.front && !!card.back);

    this.intervalId = setInterval(() => {
      this.rotateCards();
    }, 3000);
  }

  rotateCards() {
    this.cards.forEach(card => {
      if (this.flipCheck === 0) {
        // @ts-ignore
        this.renderer.addClass(card.front.nativeElement, 'showGreen');
        // @ts-ignore
        this.renderer.addClass(card.back.nativeElement, 'showRed');
      } else {
        // @ts-ignore
        this.renderer.removeClass(card.front.nativeElement, 'showGreen');
        // @ts-ignore
        this.renderer.removeClass(card.back.nativeElement, 'showRed');
      }
    });

    this.flipCheck = this.flipCheck === 0 ? 1 : 0;
  }
}






// import {Component, ElementRef, Renderer2, OnDestroy, OnInit, ViewChild} from '@angular/core';
//
// @Component({
//   selector: 'app-flipping-cards',
//   templateUrl: './flipping-cards.component.html',
//   styleUrls: ['./flipping-cards.component.scss']
// })
// export class FlippingCardsComponent implements OnInit, OnDestroy {
//
//   @ViewChild('front1') front1: ElementRef | undefined;
//   @ViewChild('back1') back1: ElementRef | undefined;
//   @ViewChild('front2') front2: ElementRef | undefined;
//   @ViewChild('back2') back2: ElementRef | undefined;
//   @ViewChild('front3') front3: ElementRef | undefined;
//   @ViewChild('back3') back3: ElementRef | undefined;
//   @ViewChild('front4') front4: ElementRef | undefined;
//   @ViewChild('back4') back4: ElementRef | undefined;
//   @ViewChild('front5') front5: ElementRef | undefined;
//   @ViewChild('back5') back5: ElementRef | undefined;
//   @ViewChild('front6') front6: ElementRef | undefined;
//   @ViewChild('back6') back6: ElementRef | undefined;
//   @ViewChild('front7') front7: ElementRef | undefined;
//   @ViewChild('back7') back7: ElementRef | undefined;
//
//   constructor(private renderer: Renderer2, private el: ElementRef) {
//     this.front2 = el.nativeElement.querySelector('.front2');
//   }
//
//   flipCheck = 0;
//
//
//   ngOnInit(): void {
//     //roda o metodo de rotacao de cartas
//     setInterval(() => {
//       this.rotateCards();
//     }, 3000);
//   }
//
//   ngOnDestroy(): void {
//     throw new Error('Method not implemented.');
//   }
//
//   // @ts-ignore
//   rotateCards() {
//     if (this.flipCheck === 0) {
//       // @ts-ignore
//       this.renderer.addClass(this.front2.nativeElement, 'showGreen');
//       // @ts-ignore
//       this.renderer.addClass(this.back2.nativeElement, 'showRed');
//
//       // @ts-ignore
//       this.renderer.addClass(this.front1.nativeElement, 'showGreen');
//       // @ts-ignore
//       this.renderer.addClass(this.back1.nativeElement, 'showRed');
//
//       this.flipCheck = 1;
//
//       setTimeout(() => {
//         // @ts-ignore
//         this.renderer.addClass(this.front4.nativeElement, 'showGreen');
//         // @ts-ignore
//         this.renderer.addClass(this.back4.nativeElement, 'showRed');
//
//         // @ts-ignore
//         this.renderer.addClass(this.front3.nativeElement, 'showGreen');
//         // @ts-ignore
//         this.renderer.addClass(this.back3.nativeElement, 'showRed');
//
//         // @ts-ignore
//         this.renderer.addClass(this.front5.nativeElement, 'showGreen');
//         // @ts-ignore
//         this.renderer.addClass(this.back5.nativeElement, 'showRed');
//
//         setTimeout(() => {
//           // @ts-ignore
//           this.renderer.addClass(this.front6.nativeElement, 'showGreen');
//           // @ts-ignore
//           this.renderer.addClass(this.back6.nativeElement, 'showRed');
//
//           // @ts-ignore
//           this.renderer.addClass(this.front7.nativeElement, 'showGreen');
//           // @ts-ignore
//           this.renderer.addClass(this.back7.nativeElement, 'showRed');
//         }, 500);
//       }, 500);
//     } else {
//       // @ts-ignore
//       this.renderer.removeClass(this.front2.nativeElement, 'showGreen');
//       // @ts-ignore
//       this.renderer.removeClass(this.back2.nativeElement, 'showRed');
//
//       // @ts-ignore
//       this.renderer.removeClass(this.front1.nativeElement, 'showGreen');
//       // @ts-ignore
//       this.renderer.removeClass(this.back1.nativeElement, 'showRed');
//
//       this.flipCheck = 1;
//
//       setTimeout(() => {
//         // @ts-ignore
//         this.front4.nativeElement.classList.add('showGreen');
//         // @ts-ignore
//         this.back4.nativeElement.classList.add('showRed');
//
//         // @ts-ignore
//         this.front3.nativeElement.classList.add('showGreen');
//         // @ts-ignore
//         this.back3.nativeElement.classList.add('showRed');
//
//         // @ts-ignore
//         this.front5.nativeElement.classList.add('showGreen');
//         // @ts-ignore
//         this.back5.nativeElement.classList.add('showRed');
//
//         setTimeout(() => {
//           // @ts-ignore
//           this.front6.nativeElement.classList.add('showGreen');
//           // @ts-ignore
//           this.back6.nativeElement.classList.add('showRed');
//
//           // @ts-ignore
//           this.front7.nativeElement.classList.add('showGreen');
//           // @ts-ignore
//           this.back7.nativeElement.classList.add('showRed');
//         }, 500);
//       }, 500);
//     // } else {
//     //   // @ts-ignore
//     //   this.front2.nativeElement.classList.remove('showGreen');
//     //   // @ts-ignore
//     //   this.back2.nativeElement.classList.remove('showRed');
//     //
//     //   // @ts-ignore
//     //   this.front1.nativeElement.classList.remove('showGreen');
//     //   // @ts-ignore
//     //   this.back1.nativeElement.classList.remove('showRed');
//     //
//     //   this.flipCheck = 0;
//     //
//     //   setTimeout(() => {
//     //     // @ts-ignore
//     //     this.front3.nativeElement.classList.remove('showGreen');
//     //     // @ts-ignore
//     //     this.back3.nativeElement.classList.remove('showRed');
//     //
//     //     // @ts-ignore
//     //     this.front4.nativeElement.classList.remove('showGreen');
//     //     // @ts-ignore
//     //     this.back4.nativeElement.classList.remove('showRed');
//     //
//     //     // @ts-ignore
//     //     this.front5.nativeElement.classList.remove('showGreen');
//     //     // @ts-ignore
//     //     this.back5.nativeElement.classList.remove('showRed');
//     //
//     //     setTimeout(() => {
//     //       // @ts-ignore
//     //       this.front7.nativeElement.classList.remove('showGreen');
//     //       // @ts-ignore
//     //       this.back7.nativeElement.classList.remove('showRed');
//     //
//     //       // @ts-ignore
//     //       this.front6.nativeElement.classList.remove('showGreen');
//     //       // @ts-ignore
//     //       this.back6.nativeElement.classList.remove('showRed');
//     //     }, 500);
//     //   }, 500);
//
//     }
//
//   }
//
//
//
// }
