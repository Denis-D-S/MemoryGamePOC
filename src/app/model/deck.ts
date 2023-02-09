
//MODEL DE COMO UM "DECK" DEVE SER (tipo um 'DTO'):
import {CardPair} from "./card-pair";
import {Card} from "./card";

export class Deck{
  id: string;
  name: string;
  cardsPairs: CardPair[];

  constructor(id: string, name: string, cardsPairs: CardPair[]) {
    this.id = id;
    this.name = name;
    this.cardsPairs = cardsPairs;
  }

  getCards(): Card[] {
    //criar lista de cards
    const cards: Card[] = [];
    //iterar pela lista de pares de cards
    for (let i = 0; i < this.cardsPairs.length; i++){
      const pair = this.cardsPairs[i];
      //para cada par, colocar suas cartas na lista de cartas.
      cards.push(pair.card1);
      cards.push(pair.card2);
    }
    //retornar a lista de cartas.
    return cards;
  }


}
