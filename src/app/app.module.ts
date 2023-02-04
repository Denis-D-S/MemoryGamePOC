import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {HomeComponent} from "./home/home.component";
import {FlippingCardsComponent} from "./flipping-cards/flipping-cards.component";
import { OneFlippingCardComponent } from './one-flipping-card/one-flipping-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlippingCardsComponent,
    OneFlippingCardComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatSidenavModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

