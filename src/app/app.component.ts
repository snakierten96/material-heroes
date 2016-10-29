import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { INavItems, NAVITEMS } from './app.navigation';

@Component({
  selector: 'mh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Tour of Heroes';
  navItems: INavItems[] = NAVITEMS;

  constructor (private titleService: Title) {
    this.titleService.setTitle(this.title);
  }

}
