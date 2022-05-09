import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MissionItemComponent } from './components/missions/mission-item/mission-item.component';
import { MissionListComponent } from './components/missions/mission-list/mission-list.component';
import { MissionsPageComponent } from './pages/missions-page/missions-page.component';
import { NavigationModule } from '../navigation-module/navigation.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MissionItemComponent,
    MissionListComponent,
    MissionsPageComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    NavigationModule
  ],
})
export class MissionsModule { }