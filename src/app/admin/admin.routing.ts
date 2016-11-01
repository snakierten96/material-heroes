import { Routes, RouterModule } from '@angular/router';
import { 
  AdminComponent,
  AdminDashboardComponent,
  ManageCrisesComponent,
  ManageHeroesComponent
} from './components';

const adminRoutes: Routes = [
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

export const adminRouting = RouterModule.forChild(adminRoutes);