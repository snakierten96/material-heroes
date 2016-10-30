import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { MaterialModule } from '@angular/material';

import { HEROES_COMPONENTS } from './components';

import { heroesRouting } from './heroes.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    heroesRouting,
    MaterialModule.forRoot()
  ],
  declarations: [
    ...HEROES_COMPONENTS
  ],
})
export class HeroesModule { }
