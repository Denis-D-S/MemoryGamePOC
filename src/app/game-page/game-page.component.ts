import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeckService } from '../service/deck-service/deck.service';
import { CardPairService } from '../service/cardPair-service/card-pair.service';
import { Deck } from '../model/deck';
import { CardService } from '../service/card-service/card.service';
import { Card } from '../model/card';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent implements OnInit {
  // cardPairs: string | undefined;
  deckId: string | null | undefined;
  deck: Deck | undefined;
  cards: Card[] = []; /** length: 6 */
  cardsAreFlipped: boolean[] = []; /** length: 6 */
  score: number;

  get selectedCardIndexes(): number[] { // método que pega o índice apenas das cartas que foram selecionadas
    const array = this.cardsAreFlipped
      .map((_, index) => index)
      .filter((valor) => this.cardsAreFlipped[valor]);
    console.log('selectedCardIndexes', array);
    return array;
  }

  get flipedCardsCount(): number {
    return this.cardsAreFlipped.filter((c) => c).length;
  }

  constructor(
    private route: ActivatedRoute, //este cara "ActivatedRoute" é usado para capturar valores da URL...
    private deckService: DeckService,
    private cardPairService: CardPairService,
    private card: CardService
  ) {
    this.score = 0;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.deckId = params.get('deckId'); //aqui vai retornar "1" pois é o valor que escrevij na URL...
      // this.cardPairs = JSON.stringify(this.cardPairService.getCardPairById(this.deckId!), null, 4); //aqui peguei o Objeto CardPairs e transformei eles em String JSON para poder imprimir no HTML.
      this.deck = this.deckService.getDeckById(this.deckId!); // acessamos o deck de id '1' normalmente, como sempre...
      if (this.deck !== null) {
        this.cards = this.deck!.getCards(); //criamos um método especial que permite pegar as cartas presentes em cada deck...
        //agora a variável "cards" está povoada com todos os cards... basta fazer um "*ngFor" no HTML para imprimir todos os cards...
        console.log(this.cards);

        this.cardsAreFlipped = this.cards.map(() => false); //os cards começam como "false", ou seja "não estão flipped".
      }
    });
  }

  /** Método chamado quando o card é clicado */
  onCardClicked(index: number): void {
    if (this.canFlip()) {
      this.flipCard(index);

      if (this.flipedCardsCount === 2) {
        const isMatch = this.isMatch();
        console.log('Deu Match: ', isMatch);

        if (isMatch) {
          this.score++;
        }
      }
    } else {
      console.log('Deve desvirar as cartas');
    }
  }

  flipCard(index: number): void {
    this.cardsAreFlipped[index] = !this.cardsAreFlipped[index]; //isso faz a carta virar, false para true..
  }

  canFlip(): boolean {
    const canFlip: boolean = this.flipedCardsCount < 2; //se não houverem mais de 2 cartas viradas, então... true...
    return canFlip; //retorna true
  }

  isMatch(): boolean {
    console.log('chamou isMatch');
    const indexA = this.selectedCardIndexes[0];
    const indexB = this.selectedCardIndexes[1];

    const cardA: Card = this.cards[indexA];
    const cardB: Card = this.cards[indexB];

    for (const cardPair of this.deck!.cardsPairs) {
      if (
        (cardPair.card1 === cardA && cardPair.card2 === cardB) ||
        (cardPair.card1 === cardB && cardPair.card2 === cardA)
      ) {
        return true;
      }
    }

    return false;
  }
}
