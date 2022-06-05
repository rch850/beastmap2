import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', loadComponent: () => import('./game/game.component').then(m => m.GameComponent) },
  { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) }
];

export const AppRoutingModule = RouterModule.forRoot(ROUTES);
