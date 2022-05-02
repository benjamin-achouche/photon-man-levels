import { importExpr } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelsPageComponent } from './levels-page.component';
import { LevelGeneralComponent } from '../../components/level-general/level-general.component';

const routes: Routes = [
  {
    path: 'levels',
    component: LevelsPageComponent,
    children: [
      {
        path: 'general',
        component: LevelGeneralComponent
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelsRoutingModule {}