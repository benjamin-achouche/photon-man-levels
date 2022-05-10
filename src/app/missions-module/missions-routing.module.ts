import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionsPageComponent } from './pages/missions-page/missions-page.component';

const routes: Routes = [
  {
    path: '',
    component: MissionsPageComponent,
    children: [
      {
        path: 'loomings',
        component: MissionsPageComponent,
      },
      {
        path: 'rebel-yell',
        component: MissionsPageComponent,
      },
      {
        path: 'the-overmind',
        component: MissionsPageComponent,
      },
      {
        path: 'enslavers',
        component: MissionsPageComponent,
      },
      {
        path: 'the-fall',
        component: MissionsPageComponent,
      },
      {
        path: 'the-stand',
        component: MissionsPageComponent,
      },
      {
        path: 'the-iron-fist',
        component: MissionsPageComponent,
      },
      {
        path: 'queen-of-blades',
        component: MissionsPageComponent,
      },
      {
        path: 'enslavers-dark-vengeance',
        component: MissionsPageComponent,
      },
      {
        path: 'wol',
        component: MissionsPageComponent,
      },
      {
        path: 'hots',
        component: MissionsPageComponent,
      },
      {
        path: 'lotv',
        component: MissionsPageComponent,
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'loomings',
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissionsRoutingModule {}