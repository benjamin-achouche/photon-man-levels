import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'levels',
    pathMatch: 'full'
  },
  {
    path: 'levels',
    loadChildren: () =>
      import('./level-module/pages/levels-page/level.module').then((m) => m.LevelsModule),
  },
  {
    path: '**',
    redirectTo: 'levels',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}