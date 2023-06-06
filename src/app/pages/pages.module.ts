import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from "@angular/forms";
import { ComponentModule } from '../components/component.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { Graphica1Component } from './graphica1/graphica1.component';
import { ProgressComponent } from './progress/progress.component';

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
    FormsModule,
    SharedModule,
    RouterModule,
    ComponentModule
  ]
})
export class PagesModule { }
