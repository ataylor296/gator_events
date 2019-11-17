import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  // {
  //   path: 'list',
  //   loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  // },
  { 
    path: 'filter', loadChildren: './filter/filter.module#FilterPageModule' 
  },
  { 
    path: 'register', loadChildren: './auth/register/register.module#RegisterPageModule' 
  },
  { 
    path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' 
  },
  { path: 'event-detail', loadChildren: './event-detail/event-detail.module#EventDetailPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
