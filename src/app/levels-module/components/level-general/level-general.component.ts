import { Component, OnInit } from '@angular/core';
import { IGeneral, IGeneralSkill } from '../../models/general.model';

@Component({
  selector: 'level-general',
  templateUrl: './level-general.component.html',
})
export class LevelGeneralComponent implements OnInit {
  vie: IGeneral = {
    values: [75, 85, 100, 115, 130, 150],
    ptsCosts: [0, 10, 18, 31, 37, 50]
  }

  bouclier: IGeneral = {
    values: [75, 85, 100, 115, 130, 150],
    ptsCosts: [0, 10, 18, 31, 37, 50]
  }

  energie: IGeneral = {
    values: [150, 175, 200, 225, 250, 300],
    ptsCosts: [0, 14, 21, 37, 46, 60]
  }

  regenVie: IGeneral = {
    values: [0.77, 0.97, 1.25, 1.63, 2.15, 3],
    ptsCosts: [0, 10, 18, 31, 37, 50]
  }

  regenBouclier: IGeneral = {
    values: [0.77, 0.97, 1.25, 1.63, 2.15, 3],
    ptsCosts: [0, 10, 18, 31, 37, 50]
  }
  
  regenEnergie: IGeneral = {
    values: [1.283, 1.533, 2.083, 2.717, 3.583, 5],
    ptsCosts: [0, 16, 25, 39, 53, 69]
  }

  armure: IGeneral = {
    values: [0, 1, 2, 3, 4, 5],
    ptsCosts: [0, 14, 21, 37, 46, 60]
  }

  armureBouclier: IGeneral = {
    values: [0, 1, 2, 3, 4, 5],
    ptsCosts: [0, 14, 21, 37, 46, 60]
  }

  vitesse: IGeneral = {
    values: [2.75, 3, 3.25, 3.5, 3.75, 4.25],
    ptsCosts: [0, 10, 18, 31, 37, 50]
  }

  revive: IGeneral = {
    values: [10, 8, 5, 3],
    ptsCosts: [0, 20, 35, 50]
  }

  modeSwap: IGeneral = {
    values: [30, 22, 15, 10],
    ptsCosts: [0, 20, 30, 50]
  }

  camouflage: IGeneralSkill = {
    values: [false, true],
    ptsCosts: [0, 100]
  }

  generalUpgrades: (IGeneral | IGeneralSkill)[] = [
    this.vie,
    this.bouclier,
    this.energie,
    this.regenVie,
    this.regenBouclier,
    this.regenEnergie,
    this.armure,
    this.armureBouclier,
    this.vitesse,
    this.revive,
    this.modeSwap,
    this.camouflage
  ]

  ngOnInit(): void {
  }
}