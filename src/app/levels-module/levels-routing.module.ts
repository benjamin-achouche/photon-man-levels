import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelsGeneralPageComponent } from './pages/levels-general-page/levels-general-page.component';
import { LevelsLaserTrooperPageComponent } from './pages/levels-laser-trooper-page/levels-laser-trooper-page.component';
import { LevelsNukeTrooperPageComponent } from './pages/levels-nuke-trooper-page/levels-nuke-trooper-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'general',
        component: LevelsGeneralPageComponent,
      },
      {
        path: 'laser',
        component: LevelsLaserTrooperPageComponent,
      },
      {
        path: 'nuke',
        component: LevelsNukeTrooperPageComponent,
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'general',
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelsRoutingModule {}