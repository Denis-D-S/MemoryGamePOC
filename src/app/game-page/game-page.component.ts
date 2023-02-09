import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DeckService} from "../service/deck-service/deck.service";
import {CardPairService} from "../service/cardPair-service/card-pair.service";
import {Deck} from "../model/deck";
import {CardService} from "../service/card-service/card.service";
import {Card} from "../model/card";

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  deckId: string | null | undefined;

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
      this.deck = this.deckService.getDeckById(this.deckId!);
      console.log(this.deck); //deck name é "deck"...

      this.cards = this.deck!.getCards(); //TODO: TEMA: tem que colocar esta linha dentro de um if. Só pode chamar esta linha se não for nulo
      console.log(this.cards);
    });

  }



}
