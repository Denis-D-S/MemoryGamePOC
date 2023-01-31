import { Directive, Input } from '@angular/core';
import { ComponentDynamic } from 'src/app/store/home.model';

@Directive({
  selector: '[appDynamicComponent]',
})
export class DynamicComponentDirective {
  @Input() component?: ComponentDynamic;
  convertType = new Map<string, Function>([
    ['string', (value: any) => value as string],
    ['number', (value: any) => Number(value)],
  ]);

  getParamValue(key: string, defaultvalue: string = ''): string | undefined {
    return this.component?.params.find((param) => param.key === key)?.value;
  }
}
