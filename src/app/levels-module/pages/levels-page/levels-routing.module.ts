import { importExpr } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelsPageComponent } from './levels-page.component';
import { LevelGeneralComponent } from '../../components/level-general/level-general.component';
import { LevelLaserTrooperComponent } from '../../components/level-laser-trooper/level-laser-trooper.component';
import { LevelNukeTrooperComponent } from '../../components/level-nuke-trooper/level-nuke-trooper.component';

const routes: Routes = [
  {
    path: '',
    component: LevelsPageComponent,
    children: [
      {
        path: 'general',
        component: LevelGeneralComponent,
      },
      {
        path: 'laser',
        component: LevelLaserTrooperComponent,
      },
      {
        path: 'nuke',
        component: LevelNukeTrooperComponent,
      },
    ] 
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelsRoutingModule {}