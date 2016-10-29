import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { Hero } from '../../hero';
import { HeroesService } from '../../services';

@Component({
  selector: 'mh-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeroesListComponent implements OnInit {

  heroes: Hero[];

  selectedHero: Hero;

  constructor(private heroesService: HeroesService) { }

  ngOnInit (): void {
    this.getHeroes();
  }

  onSelect (hero: Hero): void {
    this.selectedHero = hero;
    console.log(JSON.stringify(hero));
  }

  getHeroes (): void {
    this.heroesService.getHeroes().then(heroes => this.heroes = heroes);
  }

}
