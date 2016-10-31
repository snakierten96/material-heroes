import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

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

  constructor(
    private titleService: Title,
    private heroesService: HeroesService) { }

  ngOnInit (): void {
    this.getHeroes();
  }

  onSelect (hero: Hero): void {
    this.selectedHero = hero;
    console.log(JSON.stringify(hero));
  }

  getHeroes (): void {
    this.heroesService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
      this.titleService.setTitle(['My Heroes','Tour of Heroes'].join(" :: "));
    });
  }

  delete (hero: Hero): void {
    this.heroesService
      .delete(hero.id)
      .subscribe(() => {
        this.heroes = this.heroes.filter(h => h.id !== hero.id);
        if ( this.selectedHero === hero ) { this.selectedHero = null }
      })
  }

}
