import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../../hero';
import { HeroesService } from '../../services';

@Component({
  selector: 'mh-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private titleService: Title,
    private heroesService: HeroesService,
    private route: ActivatedRoute,
    private location: Location) {}

  @Input()
  hero: Hero;

  ngOnInit (): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroesService.getHero(id)
        .subscribe(hero => { 
          this.hero = hero;
          this.titleService.setTitle(`${this.hero.name} details :: Tour of Heroes`);
        });
    });
  }

  goBack (): void {
    this.location.back();
  }

  save (): void {
    this.heroesService.update(this.hero)
      .subscribe(() => this.goBack());
  }

}
