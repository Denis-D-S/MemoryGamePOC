import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedHeaderComponent } from './component/organisms/shared-header/shared-header.component';
import { SharedButtonComponent } from './component/atoms/shared-button/shared-button.component';
import { SharedFooterComponent } from './component/organisms/shared-footer/shared-footer.component';
import { SharedFormFieldCheckboxComponent } from './component/atoms/shared-form/shared-form-field-checkbox/shared-form-field-checkbox.component';
import { SharedFormFieldDateComponent } from './component/atoms/shared-form/shared-form-field-date/shared-form-field-date.component';
import { SharedFormFieldInputComponent } from './component/atoms/shared-form/shared-form-field-input/shared-form-field-input.component';
import { SharedFormFieldRadioButtonComponent } from './component/atoms/shared-form/shared-form-field-radio-button/shared-form-field-radio-button.component';
import { SharedFormFieldSelectComponent } from './component/atoms/shared-form/shared-form-field-select/shared-form-field-select.component';
import { SharedFormDirective } from './component/atoms/shared-form/shared-form.directive';
import { SharedChipComponent } from './component/atoms/shared-chip/shared-chip.component';
import { MaterialModule } from '../material/material.module';
import { SharedRoutingModule } from './shared-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { SharedDefaultComponentDirective } from './component/atoms/shared-default-component.directive';
import { ChipComponent } from 'src/app/shared/component/atoms/shared-form/chip/chip.component';
import { ChipsComponent } from 'src/app/shared/component/atoms/shared-form/chips/chips.component';

@NgModule({
  declarations: [
    SharedHeaderComponent,
    SharedButtonComponent,
    SharedFooterComponent,
    SharedFormFieldCheckboxComponent,
    SharedFormFieldDateComponent,
    SharedFormFieldInputComponent,
    SharedFormFieldRadioButtonComponent,
    SharedFormFieldSelectComponent,
    SharedFormDirective,
    SharedDefaultComponentDirective,
    SharedChipComponent,
    ChipComponent,
    ChipsComponent,
  ],
  exports: [
    SharedHeaderComponent,
    SharedFooterComponent,
    SharedButtonComponent,
    SharedFormFieldInputComponent,
    ChipComponent,
    ChipsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    TranslateModule.forChild(),
  ],
})
export class SharedModule {}
