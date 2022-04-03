import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbButtonModule,
  NbIconModule,
  NbActionsModule,
  NbMenuModule,
  NbMenuService,
  NbSidebarService,
} from '@nebular/theme';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    PagesRoutingModule,
    CommonModule,
    NbThemeModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbEvaIconsModule,
    NbIconModule,
    NbActionsModule,
    NbMenuModule.forRoot()
  ],
  providers: [NbSidebarService, NbMenuService]
})
export class PagesModule {}
