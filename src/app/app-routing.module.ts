import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {FlippingCardsComponent} from "./flipping-cards/flipping-cards.component";
import {HomeComponent} from "./home/home.component";
import {OneFlippingCardComponent} from "./one-flipping-card/one-flipping-card.component";
import {SidenavComponent} from "./sidenav/sidenav.component";

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
    path: 'flipping-cards',
    component: FlippingCardsComponent,
  },
  {
    path: 'one-flipping-card',
    component: OneFlippingCardComponent,
  },
  {
    path: 'sidenav',
    component: SidenavComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
