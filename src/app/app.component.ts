import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { INavItems, NAVITEMS } from './app.navigation';

@Component({
  selector: 'mh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  navItems: INavItems[] = NAVITEMS;

  constructor (private titleService: Title, private router: Router) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit (): void {
    console.log('Route is: ' + this.router.url);
  }

  sayRoute(): void {
    console.log('Current route is: ' + this.router.url);
  }
}
