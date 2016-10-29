import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Hero } from '../heroes';
import { HeroesService } from '../heroes/services';

@Component({
  selector: 'mh-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private titleService: Title,
    private heroesService: HeroesService) {
    this.titleService.setTitle(['Dashboard','Tour of Heroes'].join(" :: "));
  }

  ngOnInit (): void {
    this.heroesService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5));
  }

}
