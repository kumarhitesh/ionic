import { NgModule } from '@angular/core';
import { DeepLinkModule } from '../../../../../..';

import { PageThree } from './page-three';

@NgModule({
  declarations: [
    PageThree,
  ],
  imports: [
    DeepLinkModule.forChild(PageThree)
  ]
})
export class PageThreeModule {}
