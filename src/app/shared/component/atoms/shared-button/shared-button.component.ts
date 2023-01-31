import { Component, Input} from '@angular/core';
import {
  buttonTypeEvent,
  buttonTypeModel,
  colorTypeModel,
} from 'src/app/shared/component/atoms/shared.types';

@Component({
  selector: 'app-shared-button',
  templateUrl: './shared-button.component.html',
  styleUrls: ['./shared-button.component.scss'],
})
export class SharedButtonComponent {
  @Input() isDisabled: boolean = false;
  @Input() text?: string;
  @Input() type: buttonTypeModel = 'basic';
  @Input() buttonEvent: buttonTypeEvent = 'submit';
  @Input() color: colorTypeModel = 'none';
  @Input() label?: string;
  @Input() icon?: string;
}
