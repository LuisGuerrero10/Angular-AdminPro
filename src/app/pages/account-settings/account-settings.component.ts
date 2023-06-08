import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {



  constructor( private settingsService: SettingsService) { }

  ngOnInit(): void {
  }

  changeTheme(theme: string, elem: any) {
    
    this.settingsService.changeTheme(theme, elem)

  }

  checkCurrentTheme(link: any) {

    this.settingsService.checkCurrentTheme(link)
  }

}
