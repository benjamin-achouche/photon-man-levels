import { Component, OnInit } from '@angular/core';
import { nukeTrooperUpgrades } from '../../constants/level-nuke-trooper.constant';
import { ILevel } from '../../models/level.model';

@Component({
  selector: 'levels-nuke-trooper-page',
  templateUrl: './levels-nuke-trooper-page.component.html',
})
export class LevelsNukeTrooperPageComponent implements OnInit {
  nukeTrooperUpgrades: ILevel[] = nukeTrooperUpgrades;
  
  ngOnInit(): void {
  }
}
