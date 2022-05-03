import { Component, OnInit } from '@angular/core';
import { IGeneral, IGeneralSkill } from '../../models/general.model';
import { generalUpgrades } from './level-general.constant';

@Component({
  selector: 'level-general',
  templateUrl: './level-general.component.html',
})
export class LevelGeneralComponent implements OnInit {
  generalUpgrades: (IGeneral | IGeneralSkill)[] = generalUpgrades;

  ngOnInit(): void {
  }
}