import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-navigation',
  templateUrl: './page-navigation.component.html',
})
export class PageNavigationComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
