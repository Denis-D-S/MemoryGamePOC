import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DeckService} from "../service/deck-service/deck.service";
import {CardPairService} from "../service/cardPair-service/card-pair.service";
import {Deck} from "../model/deck";
import {CardService} from "../service/card-service/card.service";
import {Card} from "../model/card";
import {CardPair} from "../model/card-pair";

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  deckId: string | null | undefined;
  cardPairs: string | undefined;
  deck: Deck | undefined;
  cards: Card[] = [];
  cardIsFlipped: boolean[] = [];

  constructor(
    private route: ActivatedRoute, //este cara "ActivatedRoute" é usado para capturar valores da URL...
    private deckService: DeckService,
    private cardPairService: CardPairService,
    private card: CardService,

  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.deckId = params.get('deckId'); //aqui vai retornar "1" pois é o valor que escrevij na URL...

      this.cardPairs = JSON.stringify(this.cardPairService.getCardPairById(this.deckId!), null, 4); //aqui peguei o Objeto CardPairs e transformei eles em String JSON para poder imprimir no HTML.

      this.deck = this.deckService.getDeckById(this.deckId!); // acessamos o deck de id '1' normalmente, como sempre...
      if (this.deck !== null){
        this.cards = this.deck!.getCards(); //criamos um método especial que permite pegar as cartas presentes em cada deck...
        //agora a variável "cards" está povoada com todos os cards... basta fazer um "*ngFor" no HTML para imprimir todos os cards...
        console.log(this.cards);

        this.cardIsFlipped = this.cards.map(() => false); //os cards começam como "false", ou seja "não estão flipped".

      }

    });
  }


  flipCard(index: number): void{
    if (this.canFlip()) { //se este método retornar "true", então..
      this.cardIsFlipped[index] = !this.cardIsFlipped[index]; //isso faz a carta virar, false para true...
    }
  }

  canFlip(): boolean{
    const flipedCards: boolean[] = this.cardIsFlipped.filter(c => c);
    const numberOfCardsFlipped: number = flipedCards.length;
    const canFlip: boolean = numberOfCardsFlipped < 2; //se não houverem mais de 2 cartas viradas, então... true...
    return canFlip; //retorna true
  }

  isMatch(): boolean{

    //TODO: TERMINAR ESTE MÉTODO E CONTINUAR DAQUI

    return
  }

}
