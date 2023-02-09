import { Injectable } from '@angular/core';
import {Card} from "../../model/card";
import {data} from "../../data/data";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getCardById(id: string): Card | undefined{
    return data.cards.find(card => card.id === id);
  }
}
