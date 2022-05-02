import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // {
  //   path: 'levels',
  //   loadChildren: () =>
  //     import('./levels-module/pages/levels-page/levels.module').then((m) => m.LevelsModule),
  // },
  // {
  //   path: 'missions',
  //   loadChildren: () =>
  //     import('./missions-module/pages/missions-page/missions.module').then((m) => m.MissionsModule),
  // },
  // {
  //   path: '**',
  //   redirectTo: 'home',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}