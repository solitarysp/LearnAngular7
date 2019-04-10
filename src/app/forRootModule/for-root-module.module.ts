import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ForRootModuleComponent} from './for-root-module.component';
import {UserServiceConfig} from './for-root.service';

@NgModule({
  declarations: [ForRootModuleComponent],
  exports: [
    ForRootModuleComponent
  ],
  imports: [
    CommonModule,
  ],
})
export class ForRootModuleModule {

  constructor(@Optional() @SkipSelf() config: ForRootModuleModule) {
    console.log(config)
  }

  static forRoot(config: UserServiceConfig): ModuleWithProviders {
    return {
      ngModule: ForRootModuleModule,
      providers: [
        {provide: UserServiceConfig, useValue: config}
      ]
    };
  }

}
