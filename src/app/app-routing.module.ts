import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  { path: '', loadComponent: () => import('./game/game.component').then(m => m.GameComponent) },
  { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
