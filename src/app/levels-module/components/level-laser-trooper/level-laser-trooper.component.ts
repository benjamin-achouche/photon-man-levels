import { Component, OnInit } from '@angular/core';
import { ILevelBasic, ILevelAbilityDetail, ILevelAbilityNotDefault } from '../../models/level.model';
import { laserTrooperUpgrades } from './level-laser-trooper.constant';

@Component({
  selector: 'level-laser-trooper',
  templateUrl: './level-laser-trooper.component.html',
})
export class LevelLaserTrooperComponent implements OnInit {
  laserTrooperUpgrades: (ILevelBasic | ILevelAbilityDetail | ILevelAbilityNotDefault)[] = laserTrooperUpgrades;

  constructor() { }

  ngOnInit(): void {
  }

}
