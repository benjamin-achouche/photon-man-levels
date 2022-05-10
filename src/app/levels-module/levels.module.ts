import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelsRoutingModule } from './levels-routing.module';
import { LevelsComponent } from './components/levels/levels.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { LevelsGeneralPageComponent } from './pages/levels-general-page/levels-general-page.component';
import { LevelsLaserTrooperPageComponent } from './pages/levels-laser-trooper-page/levels-laser-trooper-page.component';
import { LevelsNukeTrooperPageComponent } from './pages/levels-nuke-trooper-page/levels-nuke-trooper-page.component';


@NgModule({
  declarations: [
    LevelsComponent,
    LevelsGeneralPageComponent,
    LevelsLaserTrooperPageComponent,
    LevelsNukeTrooperPageComponent,
  ],
  imports: [
    CommonModule,
    LevelsRoutingModule,
    RouterModule,
    TranslateModule.forChild({
      extend: true,
      isolate: false,
    })
  ]
})
export class LevelsModule { }
