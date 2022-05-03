import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-module/components/home.component';
import { AppBootstrapModule } from './shared-module/app-bootstrap/app-bootstrap.module';
import { PageNavigationComponent } from './navigation-module/page-navigation/page-navigation.component';
import { SkillPointsComponent } from './shared-module/skill-points/skill-points.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNavigationComponent,
    SkillPointsComponent
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