import {Routes, RouterModule} from '@angular/router';
import { NgModule } from "@angular/core";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphica1Component } from './graphica1/graphica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';



const routes: Routes = [
    {
        path:'dashboard',
        component: PagesComponent,
        children: [
          {path:'', component: DashboardComponent, data: {title: 'Dashboard' }},
          {path:'progress', component: ProgressComponent, data: {title: 'progress' }},
          {path:'graphica1', component: Graphica1Component, data: {title: 'graphica1' }},
          {path:'account-settings', component: AccountSettingsComponent, data: {title: 'Ajustes de cuenta' }},
          {path:'promises', component: PromisesComponent, data: {title: 'promises' }},
          {path:'rxjs', component: RxjsComponent, data: {title: 'rxjs' }},
        ]
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule {}