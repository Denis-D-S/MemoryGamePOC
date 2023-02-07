import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  selectedButton: string = 'home';

  // decks$!: Observable<Deck | undefined>;

  public isLoggedIn = false;
  //
  // constructor(
  //   private readonly _deckStore: DeckStore,
  // ) {
  //   this.decks$ = this._deckStore.getPlace();
  // }

  onButtonClick(buttonName: string) {
    this.selectedButton = buttonName;
    console.log('sidenav button click');
  }

  async ngOnInit() {
    console.log('sidenav init')
  }

}
