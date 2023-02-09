import {Component, OnInit} from '@angular/core';
import {DeckService} from "../service/deck-service/deck.service";
import {Deck} from "../model/deck";
import {CardPair} from "../model/card-pair";
import {Card} from "../model/card";
import {CardPairService} from "../service/cardPair-service/card-pair.service";
import {CardService} from "../service/card-service/card.service";

@Component({
  selector: 'app-deck-screen',
  templateUrl: './deck-screen.component.html',
  styleUrls: ['./deck-screen.component.scss']
})
export class DeckScreenComponent implements OnInit {
  id: string = '1' // depois pegar da rota
  deckString = JSON.stringify(this.deckService.getDeckById(this.id), null, 4); //criei este cara só para conseguir imprimir o JSON no template html. E NÃO ESTÁ FUNCIONANDO A FORMATAÇÃO DE JSON QUE EU QUERIA COLOCAR...

  cardPairString2 = JSON.stringify(this.deckService.getDeckById(this.id)?.cardsPairs[0], null, 4); //criei este cara só para conseguir imprimir o JSON no template html. E NÃO ESTÁ FUNCIONANDO A FORMATAÇÃO DE JSON QUE EU QUERIA COLOCAR...
  cardPairString = JSON.stringify(this.cardPairService.getCardPairById(this.id), null, 4); //criei este cara só para conseguir imprimir o JSON no template html. E NÃO ESTÁ FUNCIONANDO A FORMATAÇÃO DE JSON QUE EU QUERIA COLOCAR...))

  cardString2 = JSON.stringify(this.deckService.getDeckById(this.id)?.cardsPairs[0].card1, null, 4); //criei este cara só para conseguir imprimir o JSON no template html. E NÃO ESTÁ FUNCIONANDO A FORMATAÇÃO DE JSON QUE EU QUERIA COLOCAR...
  cardString = JSON.stringify(this.cardService.getCardById(this.id), null, 4); //criei este cara só para conseguir imprimir o JSON no template html. E NÃO ESTÁ FUNCIONANDO A FORMATAÇÃO DE JSON QUE EU QUERIA COLOCAR...))


  constructor(
    public deckService: DeckService,
    public cardPairService: CardPairService,
    public cardService: CardService,
    ) { //tive que mudar este cara para 'public' para poder usar o 'deckService' no template html
  }

  ngOnInit() {
    const deck: Deck | undefined = this.deckService.getDeckById(this.id);
    console.log('Imprimindo deck: ')
    console.log(deck);

    const cardPair: CardPair | undefined = this.cardPairService.getCardPairById(this.id);
    console.log('Imprimindo cardPair: ')
    console.log(cardPair);

    const card: Card | undefined = this.cardService.getCardById(this.id);
    console.log('Imprimindo card: ')
    console.log(card);
  }

}
