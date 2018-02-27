import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BadComponent } from './bad/bad.component';
import { GoodComponent } from './good/good.component';
import { PanicComponent } from './panic/panic.component';
import { WaitComponent } from './wait/wait.component';
import { NameComponent } from './name/name.component';



const appRoutes: Routes = [
  {
    path: '',
    component: NameComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'bad',
    component: BadComponent
  },
  {
    path: 'good',
    component: GoodComponent
  },
  {
    path: 'good/panic',
    component: PanicComponent
  },
  {
    path: 'good/wait',
    component: WaitComponent
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
