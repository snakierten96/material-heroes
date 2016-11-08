import { Routes, RouterModule } from '@angular/router';

import { CrisisCenterComponent  } from './crisis-center.component';
import { CrisisListComponent } from './crisis-list';
import { CrisisDetailComponent } from './crisis-detail';
import { CrisisCenterHomeComponent } from './crisis-center-home';

import { CrisisDetailResolveService } from './crisis-detail-resolve.service';

import { CanDeactivateGuardService } from '../can-deactivate-guard.service'

const crisisCenterRoutes: Routes = [
  { 
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          { 
            path: ':id',
            component: CrisisDetailComponent,
            resolve: {
              crisis: CrisisDetailResolveService
            },
            canDeactivate: [CanDeactivateGuardService]
          },
          { path: '', component: CrisisCenterHomeComponent }
        ]
      }
    ]
  }
];

export const crisisCenterRouting = RouterModule.forChild(crisisCenterRoutes);