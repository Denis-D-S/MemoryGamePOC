import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {HomeComponent} from "./home/home.component";
import {FlippingCardsComponent} from "./flipping-cards/flipping-cards.component";
import { OneFlippingCardComponent } from './one-flipping-card/one-flipping-card.component';
import {SidenavComponent} from "./sidenav/sidenav.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";
import { DeckScreenComponent } from './deck-screen/deck-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlippingCardsComponent,
    OneFlippingCardComponent,
    SidenavComponent,
    DeckScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

