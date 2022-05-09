import { Component, OnInit } from '@angular/core';
import { ILevelBasic, ILevelAbilityDetail, ILevelAbilityNotDefault } from '../../models/level.model';
import { nukeTrooperUpgrades } from './level-nuke-trooper.constant';

@Component({
  selector: 'level-nuke-trooper',
  templateUrl: './level-nuke-trooper.component.html',
})
export class LevelNukeTrooperComponent implements OnInit {
  nukeTrooperUpgrades: (ILevelBasic | ILevelAbilityDetail | ILevelAbilityNotDefault)[] = nukeTrooperUpgrades;

  constructor() { }

  ngOnInit(): void {
  }

}
