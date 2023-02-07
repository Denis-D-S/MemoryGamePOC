
//MODEL DE COMO UM "CARD PAIR" DEVE SER (tipo um 'DTO'):
import {Card} from "./card";

export class CardPair{
  id: string;
  card1: Card;
  card2: Card;

  constructor(id: string, card1: Card, card2: Card){
    this.id = id;
    this.card1 = card1;
    this.card2 = card2;
  }


}
