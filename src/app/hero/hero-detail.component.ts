import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'mh-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeroDetailComponent {

  @Input()
  hero: Hero;

}
