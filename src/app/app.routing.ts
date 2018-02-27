import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BadComponent } from './bad/bad.component';
import { GoodComponent } from './good/good.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'bad',
    component: BadComponent
  },
  {
    path: 'good',
    component: GoodComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
