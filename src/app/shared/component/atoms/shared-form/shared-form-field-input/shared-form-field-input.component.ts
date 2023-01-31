import {Component, Input} from '@angular/core';
import {SharedFormDirective} from "../shared-form.directive";

@Component({
  selector: 'app-shared-form-field-input',
  templateUrl: './shared-form-field-input.component.html',
  styleUrls: ['./shared-form-field-input.component.scss']
})
export class SharedFormFieldInputComponent extends SharedFormDirective  {

  @Input() placeholder: string = '';
  @Input() icon?: string;
  @Input() mask: string = '';

  constructor() {
    super();
  }
}
