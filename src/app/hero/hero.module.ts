import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeroDetailComponent],
  providers: [HeroService]
})
export class HeroModule { }
