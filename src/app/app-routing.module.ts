import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home-module/components/home.component';
import { MissionsPageComponent } from './missions-module/pages/missions-page/missions-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'levels',
    loadChildren: () =>
      import('./levels-module/pages/levels-page/levels.module').then((m) => m.LevelsModule),
  },
  {
    path: 'missions',
    component: MissionsPageComponent
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