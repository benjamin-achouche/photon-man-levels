import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelsRoutingModule } from './levels-routing.module';
import { LevelsGeneralPageComponent } from './pages/levels-page/levels-general-page.component';
import { LevelsLaserTrooperPageComponent } from './pages/levels-page/levels-laser-trooper-page.component';
import { LevelsNukeTrooperPageComponent } from './pages/levels-page/levels-nuke-trooper-page.component';
import { LevelGeneralComponent } from './components/level-general/level-general.component';
import { LevelLaserTrooperComponent } from './components/level-laser-trooper/level-laser-trooper.component';
import { LevelNukeTrooperComponent } from './components/level-nuke-trooper/level-nuke-trooper.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LevelGeneralComponent,
    LevelLaserTrooperComponent,
    LevelNukeTrooperComponent,
    LevelsGeneralPageComponent,
    LevelsLaserTrooperPageComponent,
    LevelsNukeTrooperPageComponent,
    // TranslateModule.forChild({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient]
    //   }
    // })
  ],
  imports: [
    CommonModule,
    LevelsRoutingModule,
    RouterModule
  ]
})
export class LevelsModule { }
