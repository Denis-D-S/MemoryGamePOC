import {Component, Input} from '@angular/core';
import {SharedFormDirective} from "../shared-form.directive";
import {SharedSelectModel} from "./shared-select-model";

@Component({
  selector: 'app-shared-form-field-select',
  templateUrl: './shared-form-field-select.component.html',
  styleUrls: ['./shared-form-field-select.component.scss']
})
export class SharedFormFieldSelectComponent extends SharedFormDirective {

  @Input() values!: SharedSelectModel[];

  constructor() {
    super();
  }

  click(value: SharedSelectModel) {
    this.outputValue.emit(value);
  }
}
