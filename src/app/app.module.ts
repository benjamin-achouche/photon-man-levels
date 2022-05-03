import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PageNavigationComponent } from './navigation-module/page-navigation/page-navigation.component';
import { SkillPointsComponent } from './shared-module/skill-points/skill-points.component';

import { AppRoutingModule } from './app-routing.module';
import { AppBootstrapModule } from './shared-module/app-bootstrap/app-bootstrap.module';
import { HomeModule } from './home-module/home.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNavigationComponent,
    SkillPointsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBootstrapModule,
    HomeModule,
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