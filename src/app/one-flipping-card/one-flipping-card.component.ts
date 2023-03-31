import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-one-flipping-card',
  templateUrl: './one-flipping-card.component.html',
  styleUrls: ['./one-flipping-card.component.scss']
})

export class OneFlippingCardComponent implements OnInit {

  isFrontVisible = true; //variable for the first card
  isFrontVisible2 = true; // variable for the second card

  constructor(private renderer: Renderer2, private el: ElementRef) {   //Renderer2 and ElementRef are Angular classes used for rendering and accessing DOM elements, respectively.
  }


  ngOnInit() {

    setInterval(() => {
      console.log('flipFirstCard() vai rodar abaixo: ');
      this.flipFirstCard();
      console.log('flipSecondCard() vai rodar abaixo: ');
      this.flipSecondCard()
    }, 3000);
  }



  flipFirstCard(){ //este método deveria ser para fazer rodar apenas o primeiro card...
      this.isFrontVisible = !this.isFrontVisible; //true vira false...precisa fazer isso sempre que começa a rodar o método pois o boolean é como se fosse um gatilho que controla em que momento estamos: se o card está virado para cima ou para baixo...
      const card = this.el.nativeElement.querySelector('.card-one .card'); //o segredo para fazer funcionar é combinar ".card-one" com ".card"...
      if (this.isFrontVisible) { // se for true, roda código abaixo...
        this.renderer.removeClass(card, 'showGreen');
        this.renderer.addClass(card, 'showRed');
      } else { // mas se for false, roda o código abaixo...
        this.renderer.removeClass(card, 'showRed');
        this.renderer.addClass(card, 'showGreen');
      }
  }


  flipSecondCard(){ // este método deveria ser para faze rodar apenas o segundo card...
      this.isFrontVisible2 = !this.isFrontVisible2;
      const card = this.el.nativeElement.querySelector('.card-two .card'); //o segredo para fazer funcionar é combinar ".card-two" com ".card"...
      if (this.isFrontVisible2) {
        this.renderer.removeClass(card, 'flip');
      } else {
        this.renderer.addClass(card, 'flip');
      }
  }



}
