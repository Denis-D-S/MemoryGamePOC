//MODEL DE COMO UM "DECK" DEVE SER (tipo um 'DTO'):
import { CardPair } from './card-pair';
import { Card } from './card';

export class Deck {
  id: string;
  name: string;
  cardsPairs: CardPair[];
  cards: Card[];

  constructor(id: string, name: string, cardsPairs: CardPair[]) {
    this.id = id;
    this.name = name;
    this.cardsPairs = cardsPairs;
    this.cards = this.getCards(); //TODO: verificar se este é o melhor aproach. Tive que criar este ccara para o método isPair() funcionar.
  }

  //MÉTODO PARA RETORNAR TODAS AS CARTAS DE UM DECK:
  getCards(): Card[] {
    this.cards = []; // É preciso inicializar este cara aqui. Para não ter a lista duplicada. Este cara limpa a lista antes de adicionas as cartas
    this.cardsPairs.forEach((pair) => {
      this.cards.push(pair.card1);
      this.cards.push(pair.card2);
    });
    return this.cards;
  }


  public isPair(cardA: Card, cardB: Card): boolean {
    if ((cardA === this.cards[0] && cardB === this.cards[1]) ||
      (cardA === this.cards[1] && cardB === this.cards[0])) {
      return true;
    }
    return false;
  }
}
