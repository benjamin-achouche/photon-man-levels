import { ILevelAbilityDetail, ILevelAbilityNotDefault, ILevelBasic } from "../../models/level.model";

const degats: ILevelBasic = {
  values: [8, 9, 10, 12, 15, 18],
  ptsCosts: [0, 21, 32, 49, 67, 86],
  icon: '/assets/images/dummy_icon.png'
}

const portee: ILevelAbilityDetail = {
  values: [
    {range: 5, visibility: 8.5},
    {range: 5.5, visibility: 9},
    {range: 6, visibility: 9.75},
    {range: 6.5, visibility: 10.25},
    {range: 7, visibility: 11},
    {range: 8, visibility: 12},
  ],
  ptsCosts: [0, 16, 25, 39, 53, 69],
  icon: '/assets/images/dummy_icon.png'
}

const attackSpeed: ILevelBasic = {
  values: [0.3, 0.27, 0.24, 0.21, 0.18, 0.15],
  ptsCosts: [0, 21, 32, 49, 67, 86],
  icon: '/assets/images/dummy_icon.png'
}

const tirCharge: ILevelAbilityDetail = {
  values: [
    {energyCost: 30, damagePrimary: 80},
    {energyCost: 40, damagePrimary: 120},
    {energyCost: 50, damagePrimary: 180},
  ],
  ptsCosts: [0, 60, 80],
  icon: '/assets/images/dummy_icon.png'
}

const G4Charges: ILevelAbilityNotDefault = {
  values: [
    false,
    {energyCost: 75, damagePrimary: 40, damageSecondary: 7, occurences: 16},
    {energyCost: 85, damagePrimary: 50, damageSecondary: 8, occurences: 19},
    {energyCost: 100, damagePrimary: 65, damageSecondary: 9, occurences: 22},
  ],
  ptsCosts: [0, 80, 60, 60],
  icon: '/assets/images/dummy_icon.png'
}

const EMPX71: ILevelAbilityNotDefault = {
  values: [
    false,
    {energyCost: 25, cooldown: 10},
    {energyCost: 30, cooldown: 12},
    {energyCost: 35, cooldown: 15},
  ],
  ptsCosts: [0, 60, 35, 50],
  icon: '/assets/images/dummy_icon.png'
}

const bouclierPsi: ILevelAbilityNotDefault = {
  values: [
    false,
    {energyCost: 75},
    {energyCost: 150}
  ],
  ptsCosts: [0, 100, 150],
  icon: '/assets/images/dummy_icon.png'
}

export const laserTrooperUpgrades: (ILevelBasic | ILevelAbilityDetail | ILevelAbilityNotDefault)[] = [
  degats,
  portee,
  attackSpeed,
  tirCharge,
  G4Charges,
  EMPX71,
  bouclierPsi
]