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
  // DICA: In this code, Renderer2 is used to add and remove CSS classes on a DOM element, which can be used to control
  // the appearance of an element. ElementRef is used to access the DOM element represented by the component, so that
  // the Renderer2 methods can be applied to it.

  ngOnInit() {

    setInterval(() => {
      console.log('flipFirstCard() vai rodar abaixo: ');
      this.flipFirstCard();
      console.log('flipSecondCard() vai rodar abaixo: ');
      this.flipSecondCard()
    }, 3000);
  }

  //DICA: a classe ".card-one" faz o card flipar. Porém é a classe ".card" que faz a ANIMAÇÃO do card virando bonitinho...
  // Se você chamar apenas ".card-one" e não chamar ".card" junto, o card vai apenas ficar troccando sem animação nenhuma.
  // Como se um card estivesse apenas se teleportando e assumindo o lugar do anterior. Horrível visualmente.

  // OUTRA DICA:
  // QUESTION: Please explain to me what this line does:  "const card = this.el.nativeElement.querySelector('.card-one .card')";
  // ANSWER: This line of code retrieves the first DOM element that matches the selector .card-one .card from the component's
  // associated HTML template. It uses the querySelector method, which is available on the nativeElement property of the
  // ElementRef instance, this.el.
  // The ElementRef is an Angular class that provides a way to interact with the underlying DOM element that is associated
  // with a component. The nativeElement property is a reference to the actual DOM element, and can be used to access
  // its properties and methods.
  // In this case, the line of code is retrieving the first element that has both the classes card-one and card. The
  // element is then stored in the card variable, which can be used later in the code to modify the element's styles or
  // interact with it in other ways.


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
