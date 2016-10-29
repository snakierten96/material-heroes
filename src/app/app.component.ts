import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Hero, HeroService } from './hero';

@Component({
  selector: 'mh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];

  selectedHero: Hero;

  constructor (
    private tileService: Title,
    private heroService: HeroService) {
    this.tileService.setTitle(this.title);
  }

  ngOnInit (): void {
    this.getHeroes();
  }

  onSelect (hero: Hero): void {
    this.selectedHero = hero;
    console.log(JSON.stringify(hero));
  }

  getHeroes (): void {
    this.heroes = this.heroService.getHeroes();
  }

}
