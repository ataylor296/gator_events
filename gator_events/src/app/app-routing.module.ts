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
  { 
    path: 'detail', loadChildren: './event-detail/event-detail.module#EventDetailPageModule' 
  },
  { 
    path: 'detail/:id', loadChildren: './event-detail/event-detail.module#EventDetailPageModule' 
  },
  { 
    path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
