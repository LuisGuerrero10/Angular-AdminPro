import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements  OnDestroy {

   title!: string;
   titleSubs$!: Subscription

  constructor( private router: Router) {

    this.titleSubs$ = this.getParametersRoute()
                        .subscribe( ( { title } ) =>{
                          this.title = title;
                          document.title = `admin - ${ title }`;

    })

   }
  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

  getParametersRoute() {
    return this.router.events.
      pipe(
        filter( (event:any) => event instanceof ActivationEnd),
        filter( event  =>(event as ActivationEnd).snapshot.firstChild===null ),
        map( (event:ActivationEnd) =>event.snapshot.data),
      )
  }

}
