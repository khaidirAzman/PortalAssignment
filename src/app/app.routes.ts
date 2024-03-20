import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {authGuard} from "./auth.guard";

export const routes: Routes = [
  {path:'', component:LoginComponent},
  {
    path:'error',
    loadComponent:() => import('./error-page/error-page.component')
      .then(module => module.ErrorPageComponent)
  },
  {
    path:'dashboard',
    loadComponent:() => import('./dashboard/dashboard.component')
      .then(module => module.DashboardComponent),
    canActivate: [authGuard]
  },
  {
    path:'task',
    loadComponent:() => import('./task-management/task-management.component')
      .then(module => module.TaskManagementComponent),
    canActivate: [authGuard]
  },
  {
    path:'backend',
    loadComponent:() => import('./backend-integration/backend-integration.component')
      .then(module => module.BackendIntegrationComponent),
    canActivate: [authGuard]
  },
  {path:'**', component:ErrorPageComponent} //wildcard route
];
