import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { MaterialModule } from '@angular/material';

import { HeroesListComponent, HeroDetailComponent } from './components';

import { heroesRouting } from './heroes.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    heroesRouting,
    MaterialModule.forRoot()
  ],
  declarations: [
    HeroesListComponent,
    HeroDetailComponent
  ],
})
export class HeroesModule { }
