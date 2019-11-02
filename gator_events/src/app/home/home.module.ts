import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FilterPageModule } from '../filter/filter.module';

import { HomePage } from './home.page';
import { FilterPage } from '../filter/filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  entryComponents: [FilterPage],
  declarations: [    
    HomePage,
    FilterPage
  ]
})
export class HomePageModule {}
