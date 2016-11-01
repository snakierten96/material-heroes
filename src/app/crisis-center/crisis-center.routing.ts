import { Routes, RouterModule } from '@angular/router';
import { CrisisCenterComponent  } from './crisis-center.component';

const crisisCenterRoutes: Routes = [
  { path: 'crisis-center', component: CrisisCenterComponent }
];

export const crisisCenterRouting = RouterModule.forChild(crisisCenterRoutes);