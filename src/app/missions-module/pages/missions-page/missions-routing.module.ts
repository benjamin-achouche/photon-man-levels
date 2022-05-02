import { importExpr } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MissionsPageComponent } from './missions-page.component';

const routes: Routes = [
  {
    path: 'levels',
    component: MissionsPageComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissionsRoutingModule {}