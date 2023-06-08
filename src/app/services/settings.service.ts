import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() {

    const urlTheme = localStorage.getItem('theme') || './assets/css/colors/blue-dark.css';
    this.linkTheme?.setAttribute('href', urlTheme);

   }

  changeTheme(theme: string, elem: any) {
    
    this.checkCurrentTheme(elem.currentTarget);

    const urlTheme = `./assets/css/colors/${ theme }.css`;

    this.linkTheme?.setAttribute('href', urlTheme)
    localStorage.setItem('theme', urlTheme)

  }

  checkCurrentTheme(link: any) {

    document.getElementsByClassName('working')[0].classList.remove('working');
    link.classList.add('working');

  }

}
