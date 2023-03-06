import {Deck} from "../model/deck";
import {CardPair} from "../model/card-pair";
import {Card} from "../model/card";

//DICA: nesta classe estamos criando um STUB. Precisamos primeiro povoar o STUB com dados, e depois precisamos
// guardar o STUB em uma variável. Esta variável deve ser EXPORTADA para fora dessa classe "data.ts".


//pq precisamos dessa 'interface' abaixo?
//R: esta interface é apenas um mapa do que precisa ser criado. Tudo em uma interface precisa ser herdado.
// Então esta interface basicamente fala que "precisa ter cards, cardPairs e decks", obrigatoriamente.
interface iData{
  cards: Card[];
  cardPairs: CardPair[];
  decks: Deck[];
}

//STUBS ABAIXO:

//stubs dos cards...
const cards: Card[] = [
  new Card(
    '1','car1','car', undefined  //Objeto card 1 casa com card2
  ),
  new Card(
    '2','car2','car', undefined
  ),
  new Card(
    '3','house1','house', undefined //Objeto house1 casa com house2
  ),
  new Card(
    '4','house2','house', undefined
  ),
  new Card(
    '5','bird1','bird', undefined //Objeto bird1 casa com bird2
  ),
  new Card(
    '6','bird2','bird', undefined
  ),
];

//stubs dos cardPairs...
const cardPairs: CardPair[] = [
  new CardPair(
    '1', cards[0], cards[1], //o cards[0] é considerado como "card1" (devido ao "DTO" da model), e o cards[1] é considerado como "card2"
  ),
  new CardPair(
    '2', cards[2], cards[3],
  ),
  new CardPair(
    '3', cards[4], cards[5],
  ),
];

//stubs dos decks...
const decks: Deck[] = [
  new Deck(
    '1', 'deck1', cardPairs  //e este objeto decks aqui contém todos os cardPairs que criamos...
  ),
  new Deck(
    '2', 'deck2', cardPairs
  ),
];


//A variável abaixo é a constante que será EXPORTADA para fora dessa classe data.ts.
//Esta variável é um objeto que contém todos os stubs que criamos acima. Note que ela herda a interface iData, que contém
// o "mapa" de todos os campos que precisam ser criados.
export const data: iData = {
  cards: cards,
  cardPairs: cardPairs,
  decks: decks,
}
