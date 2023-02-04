import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-one-flipping-card',
  templateUrl: './one-flipping-card.component.html',
  styleUrls: ['./one-flipping-card.component.scss']
})

//inside this component, i need the logic to flip one card front and back, every 3 seconds...
export class OneFlippingCardComponent implements OnInit {

  isFrontVisible = true; //variable for the first card
  isFrontVisible2 = true; // variable for the second card

  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

  ngOnInit() {

    setInterval(() => {
      console.log('flipFirstCard() vai rodar abaixo: ');
      this.flipFirstCard();
      console.log('flipSecondCard() vai rodar abaixo: ');
      this.flipSecondCard()
    }, 3000);
  }

  //ESTE MÉTODO ABAIXO FUNCIONA PERFEITAMENTE PARA RODAR O PRIMEIRO CARD...
  //MAS NÃO FUNCIONA PARA RODAR O SEGUNDO CARD...
  flipFirstCard(){ //este método deveria ser para fazer rodar apenas o primeiro card...
      this.isFrontVisible = !this.isFrontVisible;
      const card = this.el.nativeElement.querySelector('.card-one .card');
      if (this.isFrontVisible) {
        this.renderer.removeClass(card, 'showGreen');
        this.renderer.addClass(card, 'showRed');
      } else {
        this.renderer.removeClass(card, 'showRed');
        this.renderer.addClass(card, 'showGreen');
      }
  }

  //E ESTE MÉTODO ABAIXO TAMBÉM FUNCIONA PERFEITAMENTE PARA RODAR O PRIMEIRO CARD...
  //E TAMBÉM FUNCIONA PARA RODAR O SEGUNDO CARD...
  flipSecondCard(){ // este método deveria ser para faze rodar apenas o segundo card...
      this.isFrontVisible2 = !this.isFrontVisible2;
      const card = this.el.nativeElement.querySelector('.card');
      if (this.isFrontVisible2) {
        this.renderer.removeClass(card, 'flip');
      } else {
        this.renderer.addClass(card, 'flip');
      }
  }



}
