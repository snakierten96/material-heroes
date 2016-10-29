import { Routes, RouterModule } from '@angular/router';
import { HeroesListComponent, HeroDetailComponent } from './components';

const heroesRoutes: Routes = [
  { path: 'heroes',    component: HeroesListComponent },
  { path: 'hero/:id',  component: HeroDetailComponent }
];

export const heroesRouting = RouterModule.forChild(heroesRoutes);