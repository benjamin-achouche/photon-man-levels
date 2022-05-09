import { Component, OnInit } from '@angular/core';
import { ILevelBasic } from '../../models/level.model';
import { generalUpgrades } from './level-general.constant';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'level-general',
  templateUrl: './level-general.component.html',
})
export class LevelGeneralComponent implements OnInit {
  generalUpgrades: ILevelBasic[] = generalUpgrades;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.use('fr');
  }
}