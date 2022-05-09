import { ILevelAbilityDetail, ILevelAbilityNotDefault, ILevelBasic } from "../../models/level.model"

const degats: ILevelBasic = {
  values: [150, 170, 200, 230, 260, 300],
  ptsCosts: [0, 21, 32, 49, 67, 86],
  icon: '/assets/images/dummy_icon.png'
}

const portee: ILevelAbilityDetail = {
  values: [
    {range: 9, visibility: 10},
    {range: 10, visibility: 11},
    {range: 11, visibility: 12},
    {range: 12, visibility: 13.5},
    {range: 14, visibility: 16},
    {range: 16, visibility: 18},
  ],
  ptsCosts: [0, 16, 25, 39, 53, 69],
  icon: '/assets/images/dummy_icon.png'
}

const attackSpeed: ILevelBasic = {
  values: [3.5, 3.15, 2.8, 2.45, 2.1, 1.75],
  ptsCosts: [0, 21, 32, 49, 67, 86],
  icon: '/assets/images/dummy_icon.png'
}

const magazineSize: ILevelBasic = {
  values: [1, 2, 3, 4, 5, 6],
  ptsCosts: [0, 20, 20, 20, 20, 20],
  icon: '/assets/images/dummy_icon.png'
}

const ammoCost: ILevelBasic = {
  values: [150, 135, 120, 100, 80, 50],
  ptsCosts: [0, 10, 20, 30, 40, 50],
  icon: '/assets/images/dummy_icon.png'
}

const reloadSpeed: ILevelBasic = {
  values: [18, 16, 14, 12, 9, 6],
  ptsCosts: [0, 10, 15, 20, 25, 30],
  icon: '/assets/images/dummy_icon.png'
}

const flashbangCharges: ILevelBasic = {
  values: [3, 5, 8],
  ptsCosts: [0, 30, 50],
  icon: '/assets/images/dummy_icon.png'
}

const flashbangDuration: ILevelAbilityDetail = {
  values: [
    {cooldown: 10, duration: 10},
    {cooldown: 20, duration: 20},
  ],
  ptsCosts: [0, 50],
  icon: '/assets/images/dummy_icon.png'
}

const teleport: ILevelAbilityNotDefault = {
  values: [
    false,
    {cooldown: 8},
    {cooldown: 12, duration: 10, special: 'Camouflage'},
    {cooldown: 15, duration: 10, special: 'Super Camouflage'}
  ],
  ptsCosts: [],
  icon: '/assets/images/dummy_icon.png'
}

const oculus: ILevelBasic = {
  values: [
    false,
    true
  ],
  ptsCosts: [0, 100],
  icon: '/assets/images/dummy_icon.png'
}

const nuke: ILevelBasic = {
  values: [false, 60, 45, 30],
  ptsCosts: [0, 100, 50, 75],
  icon: '/assets/images/dummy_icon.png'
}

const superCamouflage: ILevelBasic = {
  values: [false, true],
  ptsCosts: [0, 100],
  icon: '/assets/images/dummy_icon.png'
}


export const nukeTrooperUpgrades: (ILevelBasic | ILevelAbilityDetail | ILevelAbilityNotDefault)[] = [
  degats,
  portee,
  attackSpeed,
  magazineSize,
  ammoCost,
  reloadSpeed,
  flashbangCharges,
  flashbangDuration,
  teleport,
  oculus,
  nuke,
  superCamouflage
]