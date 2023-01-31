import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CookieService} from "src/app/core/cookie/cookie-service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        CookieService
      ]
    };
  }
}
