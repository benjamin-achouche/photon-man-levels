import { Component, OnInit } from '@angular/core';
import { generalUpgrades } from '../../constants/level-general.constant';
import { ILevel } from '../../models/level.model';

@Component({
  selector: 'levels-general-page',
  templateUrl: './levels-general-page.component.html',
})
export class LevelsGeneralPageComponent implements OnInit {
  generalUpgrades: ILevel[] = generalUpgrades;
  
  ngOnInit(): void {
  }
}
