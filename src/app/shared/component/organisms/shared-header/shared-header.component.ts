import {Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import {colorTypeModel} from "../../atoms/shared.types";

@Component({
  selector: 'app-shared-header',
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.scss']
})
export class SharedHeaderComponent {
  showSideNav!: boolean;
  @Input() isLoggedIn!: boolean;
  @Output() toggledSideNav: EventEmitter<boolean> = new EventEmitter();
  @Output() onLoginClick: EventEmitter<any> = new EventEmitter();
  @Output() onLogoutClick: EventEmitter<any> = new EventEmitter();

  @Input() color: colorTypeModel = 'primary';
  @Input() logo: string = 'https://source.unsplash.com/random/250X220';

  toggleSideNav() {
    this.toggledSideNav.emit();
    this.showSideNav = !this.showSideNav;
  }

  onLogin() {
    this.onLoginClick.emit();
  }

  onLogout() {
    this.onLogoutClick.emit();
  }

}
