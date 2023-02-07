
//MODEL DE COMO UM "DECK" DEVE SER (tipo um 'DTO'):
import {CardPair} from "./card-pair";

export class Deck{
  id: string;
  name: string;
  cardsPairs: CardPair[];

  constructor(id: string, name: string, cardsPairs: CardPair[]) {
    this.id = id;
    this.name = name;
    this.cardsPairs = cardsPairs;
  }


}
