import { Injectable } from '@angular/core';
import {data} from "../../data/data";
import {Deck} from "../../model/deck";

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  constructor() { }

  //DICA: o STUB que criamos se chama "data.ts".
  //Abaixo temos um método que vai buscar (no STUB) um deck pelo id. Este service que puxa os dados está
  //bem simples pois estamos usando um STUB. Ele usa o método "find()" que é natural do TypeScript do Angular.
  //Mas em um caso "real", usaríamos um link URL para acessar um end-point no back-end. O back-end nos retornaria
  //um JSON com os dados do deck.

  getDeckById(id: string): Deck | undefined {
    return data.decks.find(deck => deck.id === id);
  }
}
