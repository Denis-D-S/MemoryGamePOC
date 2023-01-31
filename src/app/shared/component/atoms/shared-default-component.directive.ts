import {Directive, Input} from '@angular/core';
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {colorTypeModel} from "src/app/shared/component/atoms/shared.types";


@Directive({
  selector: '[appSharedDefaultComponent]'
})
export class SharedDefaultComponentDirective {

  @Input() label?: string;
  @Input() appearance:  MatFormFieldAppearance = 'outline';
  @Input() color: colorTypeModel = 'none';
  @Input() dataCy: string = "default-field";
}
