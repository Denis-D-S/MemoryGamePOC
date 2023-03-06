import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeckService } from '../service/deck-service/deck.service';
import { Deck } from '../model/deck';
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
  private lastTwoCardsFlipped: boolean[] = []; //TODO: SEGUNDA TENTATIVA, VERIFICAR...
  unflipCardsExecuted: boolean = false;

  get selectedCardIndexes(): number[] {
    return this.cardsAreFlipped
      .map((_, index) => index)
      .filter((valor) => this.cardsAreFlipped[valor]);
  }

  get flipedCardsCount(): number {
    return this.cardsAreFlipped.filter((c) => c).length;
  }

  constructor(
    private route: ActivatedRoute, //este cara "ActivatedRoute" é usado para capturar valores da URL...
    private deckService: DeckService,
  ) {
    this.score = 0;
    // this.unflipCardsExecuted = false;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.deckId = params.get('deckId'); //aqui vai retornar "1" pois é o valor que escrevi na URL...
      this.deck = this.deckService.getDeckById(this.deckId!); // acessamos o deck de id '1'...
      if (this.deck !== null) { //checamos se o deck está vindo "null"
        this.cards = this.deck!.getCards(); //criamos um método especial dentro do Deck que permite pegar as cartas presentes dentro de cada deck...
        this.cardsAreFlipped = this.cards.map(() => false); //por fim, temos que garantir que todas as cards que acabamos de pegar começam como "false", pois todas precisam estarem viradas para baixo
      } else {
        console.log('Deck não encontrado. Algo deu errado. Deck retornou "null".');
      }
    });
  }

  /** Método PRINCIPAL chamado sempre que um card é clicado */
  onCardClicked(index: number): void {
    console.log('chamou onCardClicked');
    if (this.canFlip()) {
      this.flipCard(index);

      if (this.flipedCardsCount === 2) {
        const isMatch = this.isMatch();
        console.log('Deu Match: ', isMatch);

        if (isMatch) {
          this.addScore();
        } else {
          this.unflipCards();
        }
      }
    } else {
      console.log('Deve desvirar as cartas');
      this.unflipCards();
    }
  }

  /** Método auxiliar para virar a carta (usado no onCardClicked()) */
  flipCard(index: number): void {
    console.log('chamou flipCard');
    this.cardsAreFlipped[index] = !this.cardsAreFlipped[index]; //isso faz a carta virar, false para true..
  }

  /** Método auxiliar que checa 2 cartas já estão viradas (usado no onCardClicked()) */
  canFlip(): boolean {
    console.log('chamou canFlip')
    const canFlip: boolean = this.flipedCardsCount < 2; //se não houverem mais de 2 cartas viradas, então... true...
    return canFlip; //retorna true
  }

  /** Método auxiliar que verifica se as 2 cartas viradas são um Match (usado no onCardClicked()) */
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

  /** Método auxiliar que marca ponto no score, caso tenha sido Match) */
  addScore(): void {
    console.log('chamou addScore')
    if (this.isMatch()){
      this.score++;
    } else {
      console.log('Não deu Match. Você não recebeu ponto nesta rodada!');
    }
  }

  /** Método auxiliar que desvira as cartas, caso não tenha sido Match) */
  //Este método precisa desvirar apenas as últimas 2 cartas que o usuário clicou, e não todas as cartas...
  //Pois se este método desvirar todas as cartas, ele estaria zerando o jogo inteiro... E isso é errado.
  unflipCards(): void {
    console.log('chamou unflipCards')
    const lastTwoCardIndexes = this.selectedCardIndexes.slice(-2); // pega os índices das últimas duas cartas viradas
    console.log('cards index: ' + lastTwoCardIndexes);
    if (!this.isMatch()){
      console.log('checa se deu match, se isMatch: ' + !this.isMatch())

      this.unflipCardsExecuted = true; // esta marcação indica que o método foi executado...

      setTimeout(() => {
        lastTwoCardIndexes.forEach(index => this.flipCard(index)); // desvira as cartas depois de 3 segundos

        this.unflipCardsExecuted = false; // depois que as cartas forem desviradas, precisamos indicar que o método deixou de ser executado...
      }, 2000);
    } else {
      console.log('Não deu Match! Portanto estou desvirando as cartas de volta para você!');
    }
  }








}
