import { Routes, RouterModule } from '@angular/router';
import { 
  AdminComponent,
  AdminDashboardComponent,
  ManageCrisesComponent,
  ManageHeroesComponent
} from './components';

import { AuthGuardService } from '../auth-guard.service';

const adminRoutes: Routes = [
  { 
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        children: [
          { path: 'crises', component: ManageCrisesComponent },
          { path: 'heroes', component: ManageHeroesComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }      
    ]
  }
];

export const adminRouting = RouterModule.forChild(adminRoutes);