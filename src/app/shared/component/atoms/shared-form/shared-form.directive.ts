import {Directive, EventEmitter, Input, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {SharedFormModel} from "src/app/shared/component/atoms/shared-form/common/shared-form-model";
import {
  SharedDefaultComponentDirective
} from "src/app/shared/component/atoms/shared-default-component.directive";

@Directive({
  selector: '[appSharedForm]'
})
export class SharedFormDirective extends SharedDefaultComponentDirective{
  @Input() parentForm: FormControl | undefined;
  @Output() outputValue = new EventEmitter<any | SharedFormModel>();
}
