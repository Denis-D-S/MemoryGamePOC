import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DeckService} from '../service/deck-service/deck.service';
import {Deck} from '../model/deck';
import {Card} from '../model/card';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent implements OnInit {
  deckId: string | null | undefined;
  deck: Deck | undefined;
  cards: Card[] = [];
  cardsAreFlipped: boolean[] = [];
  score: number;
  misses: number;
  unflipCardsExecuted: boolean = false;
  blockedCardIndexes: number[];
  showMessage?: string;
  lastSelectedCardIndex: number | null = null;

  // VARIÁVEIS QUE LIDAM COM OS MISSES
  showMissesPopup: boolean = false;
  missesListener(): boolean {
    return this.showMissesPopup;
  }
  triggerMissesPopup() {
    this.showMissesPopup = true;
    setTimeout(() => {
      this.showMissesPopup = false;
    }, 1000);
  }

  get selectedCardIndexes(): number[] {
    return this.cardsAreFlipped
      .map((_, index) => index)
      .filter((valor) => this.cardsAreFlipped[valor]);
  }

  get flipedCardsCount(): number {
    return this.cardsAreFlipped.filter((c) => c).length;
  }

  /** Construtor */
  constructor(
    private route: ActivatedRoute, //este cara "ActivatedRoute" é usado para capturar valores da URL...
    private deckService: DeckService,
  ) {
    this.score = 0;
    this.misses = 0;
    this.blockedCardIndexes = [];
  }

  /** Método que inicia o código */
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.deckId = params.get('deckId');
      this.deck = this.deckService.getDeckById(this.deckId!);
      if (this.deck !== null) {
        this.cards = this.deck!.getCards();
        this.cardsAreFlipped = this.cards.map(() => false); // Inicializa todas as cartas como não viradas...
        this.shuffleCards(); // Embaralha as cartas
      } else {
        console.log('Deck não encontrado. Algo deu errado. Deck retornou "null".');
      }
    });
  }

  /** Método PRINCIPAL chamado sempre que um card é clicado */
  onCardClicked(index: number): void {
    console.log('chamou onCardClicked');
    if (this.unflipCardsExecuted) { //esta condição é executada, para que o usuário não possa clicar em uma carta enquanto o setTimeOut() de 2 segundos estiver rodando...
      return; //estes "return" são usados para que o código não continue rodando (ocorra um break), caso alguma condição seja atendida...
    }
    if (!this.blockedCardIndexes.includes(index)) { //se a carta bloqueada não for a mesma clicada pelo usuário...
      if (this.cantFlipBecauseItsTheSameCard(index)) { // verifica a carta clicada é a mesma anteriormente clicada... caso o usuário clique 2 vezes na mesma carta, não pode virar...
        return;
      }
      if (this.lastSelectedCardIndex !== index) { //se a última carta clicada for de um índice diferente (for uma carta diferente), então ok para ser virada...
        this.flipCard(index); //daí flipa a carta...

        if (this.flipedCardsCount === 2) { //se a quantidade de cartas viradas for igual a 2, então cheque se deu match...
          const isMatch = this.isMatch(); //checando se deu match...
          console.log('Deu Match: ', isMatch);

          if (isMatch) { //se deu match...
            this.addScore(); // então pontua...
            const indexA = this.selectedCardIndexes[0];
            const indexB = this.selectedCardIndexes[1];
            this.blockedCardIndexes.push(indexA, indexB);
            this.showMessageBy2Seconds('Parabéns!');
          }
          else {
            this.showMessageBy2Seconds('Não deu Match. Desvirando as cartas em 1 momento...');
            this.addMisses();
          }
          this.unflipCards() //caso não tenha dado match, desvire as 2 cartas...
        }
      } else { //caso o usuário tenha clicado em 2 cartas, mas não tenha dado match, então...
        if (this.canFlipBecauseTwoCardsHaveBeenClicked(index)) { //então desvire as 2 últimas cartas clicadas que não deram match...
          this.unflipCards(); //desvire as cartas...
        }
      }
      this.lastSelectedCardIndex = index;
    }
  }

  /** Método auxiliar para virar a carta (usado no onCardClicked()) */
  flipCard(index: number): void {
    console.log('chamou flipCard');
    this.cardsAreFlipped[index] = !this.cardsAreFlipped[index]; //isso faz a carta virar, false para true..
  }


  /** Método auxiliar que impede o usuário de clicar 2 vezes na mesma carta (flipar a mesma carta) */
  cantFlipBecauseItsTheSameCard(index:number){ //este método deve rodar quando o usuário clicar 2 vezes na mesma carta...
    console.log('chamou cantFlipBecauseItsTheSameCard')
    const lastSelectedCardIndex = this.selectedCardIndexes?.[this.selectedCardIndexes?.length - 1];
    if (lastSelectedCardIndex === index) {
      console.log('Não pode virar a carta atual, pois é a mesma carta que a última clicada.');
      return true;
    } else {
      return false;
    }
  }

  /** Método auxiliar que checa se 2 foram clicadas */
  canFlipBecauseTwoCardsHaveBeenClicked(index:number){ //este método deve rodar quando o usuário clicar em 2 cartas, e acabar não dando match...
    console.log('chamou canFlipBecauseTwoCardsHaveBeenClicked');
    const flippedCardsCount = this.cardsAreFlipped.filter((c) => c).length;
    if (this.selectedCardIndexes.includes(index)) {
      console.log('Não pode virar a carta atual, pois ela já está virada.');
      return false;
    }
    return flippedCardsCount <= 1; // se retornar true, pode virar a próxima carta, se retornar false, não pode virar a próxima carta...
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
    if (this.isMatch()) {
      this.score++;
    } else {
      console.log('Não deu Match. Você não recebeu ponto nesta rodada!');
    }
  }

  /** Método auxiliar que marca misses, caso não tenha dado Match) */
  addMisses(): void {
    console.log('chamou addMisses');
    if (!this.isMatch()) {
      this.misses++;
      this.triggerMissesPopup();
    } else {
      console.log('Deu Match. Você não recebeu Misses nesta rodada!');
    }
  }

  /** Método auxiliar que desvira as cartas, caso não tenha sido Match) */
  unflipCards(): void {
    console.log('chamou unflipCards')
    console.log('cards index para desvirar: ' + this.selectedCardIndexes);
    this.unflipCardsExecuted = true; // esta marcação indica que o método foi executado...
    setTimeout(() => {
      this.selectedCardIndexes.forEach(index => this.flipCard(index)); // desvira as cartas depois de 3 segundos
      this.unflipCardsExecuted = false; // depois que as cartas forem desviradas, precisamos indicar que o método deixou de ser executado...
    }, 1500);
  }

  showMessageBy2Seconds(message: string): void {
    this.showMessage = message;
    setTimeout(() => {
      this.showMessage = undefined;
    }, 2000)
  }

  restartGame() {
    this.cardsAreFlipped = this.cards.map(() => false); //faz todos os cards ficarem false, ou seja, zera o jogo...
    this.score = 0; //zera o score
    this.blockedCardIndexes = []; //zera o array de cartas bloqueadas, ou seja, agora todas as cartas são permitidas clicar...
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

}
