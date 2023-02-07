import {Component, OnInit} from '@angular/core';
import {DeckService} from "../service/deck.service";

@Component({
  selector: 'app-deck-screen',
  templateUrl: './deck-screen.component.html',
  styleUrls: ['./deck-screen.component.scss']
})
export class DeckScreenComponent implements OnInit {

  //sempre que eu chamo o import desse cara abaixo, dá erro lá no "data.ts", e o STUB passa a parar de funcionar...
  // constructor(private deckService: DeckService) {
  // }
  //
  // ngOnInit() {
  //   const deckId = '1' // depois pegar da rota
  //   const deck: Deck = this.deckService.getDeckById(deckId);
  //   console.log(deck);
  // }

  deckId: string = '1' // depois pegar da rota (este '1' é um stub temporário).

  deckService: DeckService = new DeckService();

  ngOnInit() {
    this.deckService.getDeckById(this.deckId);
    console.log(this.deckService.getDeckById(this.deckId));
  }

}
