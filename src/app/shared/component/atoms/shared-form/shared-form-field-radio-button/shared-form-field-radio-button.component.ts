import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-shared-form-field-radio-button',
  templateUrl: './shared-form-field-radio-button.component.html',
  styleUrls: ['./shared-form-field-radio-button.component.scss']
})
export class SharedFormFieldRadioButtonComponent {

  @Input() buttonText?: string;
  @Input() checked?: boolean;
  @Input() inputValue?: any;
  @Output() btnChange = new EventEmitter<any>();

  changeEvent(): void {
    this.btnChange.emit(this.inputValue);
  }
}
