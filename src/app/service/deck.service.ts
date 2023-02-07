import { Injectable } from '@angular/core';
import {data} from "../data/data";
import {Deck} from "../model/deck";

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  constructor() { }

  getDeckById(id: string): Deck | undefined {
    return data.decks.find(deck => deck.id === id);
  }
}
