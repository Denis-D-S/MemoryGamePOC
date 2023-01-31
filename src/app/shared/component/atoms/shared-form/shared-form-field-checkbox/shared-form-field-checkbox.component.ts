import {Component, Input} from '@angular/core';
import {SharedFormDirective} from "../shared-form.directive";

@Component({
  selector: 'app-shared-form-field-checkbox',
  templateUrl: './shared-form-field-checkbox.component.html',
  styleUrls: ['./shared-form-field-checkbox.component.scss']
})
export class SharedFormFieldCheckboxComponent extends SharedFormDirective{

  @Input() value!: boolean;

  constructor() {
    super();
  }
}
