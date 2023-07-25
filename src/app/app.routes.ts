import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', loadComponent: () => import('./game/game.component') },
  { path: 'about', loadComponent: () => import('./about/about.component') }
];
