import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {FlippingCardsComponent} from "./flipping-cards/flipping-cards.component";
import {HomeComponent} from "./home/home.component";
import {OneFlippingCardComponent} from "./one-flipping-card/one-flipping-card.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {Sidenav2Component} from "./sidenav2/sidenav2.component";
import {GamePageComponent} from "./game-page/game-page.component";

// const routes: Routes = [
//   {
//     path: '',
//     component: AppComponent,
//     children: [
//       {
//         path: 'flipping-cards',
//         component: FlippingCardsComponent,
//       }
//     ],
//   },
// ];

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'flipping-cards',  //teste que fiz com 2 cards virando
    component: FlippingCardsComponent,
  },
  {
    path: 'one-flipping-card', //teste que estava fazendo com 1 card apenas...
    component: OneFlippingCardComponent,
  },
  {
    path: 'sidenav', //teste que fiz com sidenav que deu errado (shared e mais um monte de coisas)
    component: SidenavComponent,
  },
  {
    path: 'sidenav2', //teste que fiz com sidenav que até é utilizável, mas precisa de mais trabalho
    component: Sidenav2Component,
  },
  {
    path: 'game/:deckId', //esta é a técnica/método básico para conseguirmos pegar o id de uma URL... além disso usamos o ActivatedRoute no construtor do GamePageCOomponent...
    component: GamePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
