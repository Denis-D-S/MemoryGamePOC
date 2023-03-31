
import { Deck } from "../model/deck";
import { CardPair } from "../model/card-pair";
import { Card } from "../model/card";

interface iData {
  cards: Card[];
  cardPairs: CardPair[];
  decks: Deck[];
}
const cards: Card[] = [
  new Card('1', 'car1', 'car', 'assets/images/car.png'),
  new Card('2', 'car2', 'car', 'assets/images/car.png'),
  new Card('3', 'house1', 'house', 'assets/images/house.png'),
  new Card('4', 'house2', 'house', 'assets/images/house.png'),
  new Card('5', 'bird1', 'bird', 'assets/images/bird.png'),
  new Card('6', 'bird2', 'bird', 'assets/images/bird.png'),
  new Card('7', 'tree1', 'tree', 'assets/images/tree.png'),
  new Card('8', 'tree2', 'tree', 'assets/images/tree.png'),
  new Card('9', 'dog1', 'dog', 'assets/images/dog.png'),
  new Card('10', 'dog2', 'dog', 'assets/images/dog.png'),
  new Card('11', 'cat1', 'cat', 'assets/images/cat.png'),
  new Card('12', 'cat2', 'cat', 'assets/images/cat.png'),
  new Card('13', 'flower1', 'flower', 'assets/images/flower.png'),
  new Card('14', 'flower2', 'flower', 'assets/images/flower.png'),
  new Card('15', 'book1', 'book', 'assets/images/book.png'),
  new Card('16', 'book2', 'book', 'assets/images/book.png'),
  new Card('17', 'fruit1', 'fruit', 'assets/images/fruit.png'),
  new Card('18', 'fruit2', 'fruit', 'assets/images/fruit.png'),
  new Card('19', 'music1', 'music', 'assets/images/music.png'),
  new Card('20', 'music2', 'music', 'assets/images/music.png'),
];

const cardPairs: CardPair[] = [
  new CardPair('1', cards[0], cards[1]),
  new CardPair('2', cards[2], cards[3]),
  new CardPair('3', cards[4], cards[5]),
  new CardPair('4', cards[6], cards[7]),
  new CardPair('5', cards[8], cards[9]),
  new CardPair('6', cards[10], cards[11]),
  new CardPair('7', cards[12], cards[13]),
  new CardPair('8', cards[14], cards[15]),
  new CardPair('9', cards[16], cards[17]),
  new CardPair('10', cards[18], cards[19]),
];

const decks: Deck[] = [
  new Deck('1', 'deck1', cardPairs),
  new Deck('2', 'deck2', cardPairs),
];

export const data: iData = {
  cards: cards,
  cardPairs: cardPairs,
  decks: decks,
}

