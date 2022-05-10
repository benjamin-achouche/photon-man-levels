import { Component, OnInit } from '@angular/core';
import { laserTrooperUpgrades } from '../../constants/level-laser-trooper.constant';
import { ILevel } from '../../models/level.model';

@Component({
  selector: 'levels-laser-trooper-page',
  templateUrl: './levels-laser-trooper-page.component.html',
})
export class LevelsLaserTrooperPageComponent implements OnInit {
  laserTrooperUpgrades: ILevel[] = laserTrooperUpgrades;
  
  ngOnInit(): void {
  }
}
