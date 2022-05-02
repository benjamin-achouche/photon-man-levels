import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNavigationComponent } from './navigation-module/page-navigation/page-navigation.component';
import { MissionNavigationComponent } from './navigation-module/mission-navigation/mission-navigation.component';
import { LevelsPageComponent } from './level-module/pages/levels-page/levels-page.component';
import { LevelGeneralComponent } from './level-module/components/level-general/level-general.component';
import { LevelLaserTrooperComponent } from './level-module/components/level-laser-trooper/level-laser-trooper.component';
import { LevelNukeTrooperComponent } from './level-module/components/level-nuke-trooper/level-nuke-trooper.component';
import { LevelListComponent } from './level-module/components/levels/level-list/level-list.component';
import { LevelItemComponent } from './level-module/components/levels/level-item/level-item.component';
import { LevelDescriptionListComponent } from './level-module/components/level-description/level-description-list/level-description-list.component';
import { LevelDescriptionItemComponent } from './level-module/components/level-description/level-description-item/level-description-item.component';
import { SkillPointsComponent } from './shared-module/skill-points/skill-points.component';
import { MissionsPageComponent } from './mission-module/pages/missions-page/missions-page.component';
import { MissionListComponent } from './mission-module/components/missions/mission-list/mission-list.component';
import { MissionItemComponent } from './mission-module/components/missions/mission-item/mission-item.component';
import { AppBootstrapModule } from './shared-module/app-bootstrap/app-bootstrap.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNavigationComponent,
    MissionNavigationComponent,
    LevelsPageComponent,
    LevelGeneralComponent,
    LevelLaserTrooperComponent,
    LevelNukeTrooperComponent,
    LevelListComponent,
    LevelItemComponent,
    LevelDescriptionListComponent,
    LevelDescriptionItemComponent,
    SkillPointsComponent,
    MissionsPageComponent,
    MissionListComponent,
    MissionItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBootstrapModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}