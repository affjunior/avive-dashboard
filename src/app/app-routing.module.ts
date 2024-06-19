import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layouts/full/full.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        {
          path: '',
          redirectTo: '/dashboard',
          pathMatch: 'full',
        },
        {
          path: 'dashboard', 
          loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule)
        },
        {
          path: 'organization',
          loadChildren: () => import('./pages/organization/organization.module').then((m) => m.OrganizationModule) 
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
