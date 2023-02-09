import { Injectable } from '@angular/core';
import {CardPair} from "../../model/card-pair";
import {data} from "../../data/data";

@Injectable({
  providedIn: 'root'
})
export class CardPairService {

  constructor() { }

  getCardPairById(id: string): CardPair | undefined {
    return data.cardPairs.find(cardPair => cardPair.id === id);
  }
}
