import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelsGeneralPageComponent } from './pages/levels-page/levels-general-page.component';
import { LevelsLaserTrooperPageComponent } from './pages/levels-page/levels-laser-trooper-page.component';
import { LevelsNukeTrooperPageComponent } from './pages/levels-page/levels-nuke-trooper-page.component';

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