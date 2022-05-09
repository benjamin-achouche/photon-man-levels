import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionNavigationComponent } from './mission-navigation/mission-navigation.component';
import { PageNavigationComponent } from './page-navigation/page-navigation.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from '../app.module';

@NgModule({
  declarations: [
    MissionNavigationComponent,
    PageNavigationComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
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