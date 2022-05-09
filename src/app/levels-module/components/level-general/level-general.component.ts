import { Component, OnInit } from '@angular/core';
import { ILevelBasic } from '../../models/level.model';
import { generalUpgrades } from './level-general.constant';

@Component({
  selector: 'level-general',
  templateUrl: './level-general.component.html',
})
export class LevelGeneralComponent implements OnInit {
  generalUpgrades: ILevelBasic[] = generalUpgrades;

  ngOnInit(): void {
  }
}