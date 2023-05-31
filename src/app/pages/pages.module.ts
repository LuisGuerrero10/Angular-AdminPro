import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { Graphica1Component } from './graphica1/graphica1.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';

const PAGES_COMPONENT = [
  DashboardComponent,
  ProgressComponent,
  Graphica1Component,
  PagesComponent,
];

@NgModule({
  declarations: [
    PAGES_COMPONENT
  ],
  exports: [
    PAGES_COMPONENT
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ]
})
export class PagesModule { }
