import {Component, Input} from '@angular/core';
import {SharedFormDirective} from "../shared-form.directive";
import {DateHelper} from "../../../../../common/date-helper";

@Component({
  selector: 'app-shared-form-field-date',
  templateUrl: './shared-form-field-date.component.html',
  styleUrls: ['./shared-form-field-date.component.scss'],
})
export class SharedFormFieldDateComponent extends SharedFormDirective {

  @Input() placeholder: string = 'dd/mm/yyyy';
  @Input() minDate = DateHelper.subtractDays(180, new Date());
  @Input() maxDate? = new Date();

  constructor() {
    super();
  }
}
