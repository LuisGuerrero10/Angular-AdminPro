import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {title: 'graphica', url:'graphica1'},
        {title: 'Main', url:'/'},
        {title: 'rxjs', url:'rxjs'},
        {title: 'progressBar', url:'progress'},
        {title: 'Promises', url:'promises'},
      ]
    }
  ];

  constructor() { }
}
