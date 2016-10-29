import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
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
    private heroesService: HeroesService,
    private route: ActivatedRoute,
    private location: Location) {}

  @Input()
  hero: Hero;

  ngOnInit (): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroesService.getHero(id)
        .then(hero => this.hero = hero);
    });
  }

  goBack (): void {
    this.location.back();
  }

}
