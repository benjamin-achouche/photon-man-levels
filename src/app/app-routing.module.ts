import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-module/pages/home-page/home-page.component';
import { MissionsPageComponent } from './missions-module/pages/missions-page/missions-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'levels',
    loadChildren: () =>
      import('./levels-module/levels.module').then((m) => m.LevelsModule),
  },
  {
    path: 'missions',
    loadChildren: () =>
      import('./missions-module/missions.module').then((m) => m.MissionsModule),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}