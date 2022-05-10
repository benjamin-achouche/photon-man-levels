import { Component, Input, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { ILevel } from '../../models/level.model';

@Component({
  selector: 'levels',
  templateUrl: './levels.component.html',
})
export class LevelsComponent implements OnInit {
  @Input() upgrades: ILevel[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.use('fr');
  }

  typeCheck(val: string | {[key: string]: string;}): boolean {
    return typeof val === 'string';
  }
}