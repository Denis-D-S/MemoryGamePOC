
interface iData{
  cards: Card[];
  cardPairs: CardPair[];
  decks: Deck[];
}

const cards: Card[] = [
  new Card(
    '1','car1','car', undefined  //card 1 casa com card2
  ),
  new Card(
    '2','car2','car', undefined
  ),
  new Card(
    '3','house1','house', undefined //house1 casa com house 2, etc....
  ),
  new Card(
    '4','house2','house', undefined
  ),
  new Card(
    '5','bird1','bird', undefined
  ),
  new Card(
    '6','bird2','bird', undefined
  ),
];
const cardPairs: CardPair[] = [
  new CardPair(
    '1', cards[0], cards[1], //o array aqui é do cards que criamos acima...
  ),
  new CardPair(
    '2', cards[2], cards[3],
  ),
  new CardPair(
    '3', cards[4], cards[5],
  ),
];
const decks: Deck[] = [
  new Deck(
    '1', 'deck', cardPairs
  )
];


export const data: iData = {
  cards: cards,
  cardPairs: cardPairs,
  decks: decks,
}
