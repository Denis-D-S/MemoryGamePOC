// import {Deck} from "../model/deck";
// import {CardPair} from "../model/card-pair";
// import {Card} from "../model/card";
//
// //DICA: nesta classe estamos criando um STUB. Precisamos primeiro povoar o STUB com dados, e depois precisamos
// // guardar o STUB em uma variável. Esta variável deve ser EXPORTADA para fora dessa classe "data.ts".
//
//
// //pq precisamos dessa 'interface' abaixo?
// //R: esta interface é apenas um mapa do que precisa ser criado. Tudo em uma interface precisa ser herdado.
// // Então esta interface basicamente fala que "precisa ter cards, cardPairs e decks", obrigatoriamente.
// interface iData{
//   cards: Card[];
//   cardPairs: CardPair[];
//   decks: Deck[];
// }
//
// //STUBS ABAIXO:
//
// //stubs dos cards...
// const cards: Card[] = [
//   new Card(
//     '1','car1','car', undefined  //Objeto card 1 casa com card2
//   ),
//   new Card(
//     '2','car2','car', undefined
//   ),
//   new Card(
//     '3','house1','house', undefined //Objeto house1 casa com house2
//   ),
//   new Card(
//     '4','house2','house', undefined
//   ),
//   new Card(
//     '5','bird1','bird', undefined //Objeto bird1 casa com bird2
//   ),
//   new Card(
//     '6','bird2','bird', undefined
//   ),
// ];
//
// //stubs dos cardPairs...
// const cardPairs: CardPair[] = [
//   new CardPair(
//     '1', cards[0], cards[1], //o cards[0] é considerado como "card1" (devido ao "DTO" da model), e o cards[1] é considerado como "card2"
//   ),
//   new CardPair(
//     '2', cards[2], cards[3],
//   ),
//   new CardPair(
//     '3', cards[4], cards[5],
//   ),
// ];
//
// //stubs dos decks...
// const decks: Deck[] = [
//   new Deck(
//     '1', 'deck1', cardPairs  //e este objeto decks aqui contém todos os cardPairs que criamos...
//   ),
//   new Deck(
//     '2', 'deck2', cardPairs
//   ),
// ];
//
//
// //A variável abaixo é a constante que será EXPORTADA para fora dessa classe data.ts.
// //Esta variável é um objeto que contém todos os stubs que criamos acima. Note que ela herda a interface iData, que contém
// // o "mapa" de todos os campos que precisam ser criados.
// export const data: iData = {
//   cards: cards,
//   cardPairs: cardPairs,
//   decks: decks,
// }

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

