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
      }
    });
  }

}
