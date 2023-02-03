import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {FlippingCardsComponent} from "./flipping-cards/flipping-cards.component";
import {HomeComponent} from "./home/home.component";

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
