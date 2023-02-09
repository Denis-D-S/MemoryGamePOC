import {Component, OnInit} from '@angular/core';
import {DeckService} from "../service/deck-service/deck.service";
import {CardPairService} from "../service/cardPair-service/card-pair.service";
import {CardService} from "../service/card-service/card.service";
import {Deck} from "../model/deck";
import {CardPair} from "../model/card-pair";
import {Card} from "../model/card";

@Component({
  selector: 'app-sidenav2',
  templateUrl: './sidenav2.component.html',
  styleUrls: ['./sidenav2.component.scss']
})
export class Sidenav2Component implements OnInit {

  id: string = '1';
  deckString = JSON.stringify(this.deckService.getDeckById(this.id), null, 4); //criei este cara só para conseguir imprimir o JSON no template html. E NÃO ESTÁ FUNCIONANDO A FORMATAÇÃO DE JSON QUE EU QUERIA COLOCAR...
  cardPairString = JSON.stringify(this.cardPair.getCardPairById(this.id), null, 4); //criei este cara só para conseguir imprimir o JSON no template html. E NÃO ESTÁ FUNCIONANDO A FORMATAÇÃO DE JSON QUE EU QUERIA COLOCAR...))
  cardString = JSON.stringify(this.card.getCardById(this.id), null, 4); //criei este cara só para conseguir imprimir o JSON no template html. E NÃO ESTÁ FUNCIONANDO A FORMATAÇÃO DE JSON QUE EU QUERIA COLOCAR...))


  constructor(
    public deckService: DeckService,
    public cardPair: CardPairService,
    public card: CardService) { }

  ngOnInit() {
    const deck: Deck | undefined = this.deckService.getDeckById(this.id);
    console.log('Imprimindo deck: ')
    console.log(deck);

    const cardPair: CardPair | undefined = this.cardPair.getCardPairById(this.id);
    console.log('Imprimindo cardPair: ')
    console.log(cardPair);

    const card: Card | undefined = this.card.getCardById(this.id);
    console.log('Imprimindo card: ')
    console.log(card);

  }

}
