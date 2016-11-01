import { Routes, RouterModule } from '@angular/router';
import { 
  AdminComponent,
  AdminDashboardComponent,
  ManageCrisesComponent,
  ManageHeroesComponent
} from './components';

const crisisCenterRoutes: Routes = [
  { 
    path: 'admin',
    component: AdminComponent,
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

export const crisisCenterRouting = RouterModule.forChild(crisisCenterRoutes);