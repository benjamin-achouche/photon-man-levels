import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionNavigationComponent } from './components/mission-navigation/mission-navigation.component';
import { PageNavigationComponent } from './components/page-navigation/page-navigation.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from '../app.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MissionNavigationComponent,
    PageNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    MissionNavigationComponent,
    PageNavigationComponent
  ]
})
export class NavigationModule { }