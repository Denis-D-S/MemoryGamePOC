import { Component } from '@angular/core';
import {DeckService} from "../../service/deck.service";

@Component({
  selector: 'app-deck-screen',
  templateUrl: './deck-screen.component.html',
  styleUrls: ['./deck-screen.component.scss']
})
export class DeckScreenComponent {
  constructor(private deckService: DeckService) {

  }

  ngOnInit() {
    const deckId = '1' // depois pegar da rota
    const deck: Deck | undefined = this.deckService.getDeckById(deckId);
    console.log(deck);
  }
}
