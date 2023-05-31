import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const SHARED_COMPONENT = [
  HeaderComponent,
  SidebarComponent,
  BreadcrumbsComponent
];

@NgModule({
  declarations: [
    SHARED_COMPONENT
  ],
  exports: [
    SHARED_COMPONENT
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
