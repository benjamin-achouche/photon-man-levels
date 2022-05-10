import { ILevel } from "../models/level.model"

const degats: ILevel = {
  name: 'Name.NukeTrooperUpgrades.Degats',
  description: 'Description.NukeTrooperUpgrades.Degats',
  levelDescription: 'Level.Description.NukeTrooperUpgrades.Degats',
  values: [
    {value: 150},
    {value: 170},
    {value: 200},
    {value: 230},
    {value: 260},
    {value: 300},
  ],
  ptsCosts: [0, 21, 32, 49, 67, 86],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0
}

const portee: ILevel = {
  name: 'Name.NukeTrooperUpgrades.Portee',
  description: 'Description.NukeTrooperUpgrades.Portee',
  levelDescription: 'Level.Description.NukeTrooperUpgrades.Portee',
  values: [
    {range: 9, visibility: 10},
    {range: 10, visibility: 11},
    {range: 11, visibility: 12},
    {range: 12, visibility: 13.5},
    {range: 14, visibility: 16},
    {range: 16, visibility: 18},
  ],
  ptsCosts: [0, 16, 25, 39, 53, 69],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0
}

const attackSpeed: ILevel = {
  name: 'Name.NukeTrooperUpgrades.AttackSpeed',
  description: 'Description.NukeTrooperUpgrades.AttackSpeed',
  levelDescription: 'Level.Description.NukeTrooperUpgrades.AttackSpeed',
  values: [
    {value: 5},
    {value: 4.5},
    {value: 4},
    {value: 3.5},
    {value: 3},
    {value: 2.5},
  ],
  ptsCosts: [0, 21, 32, 49, 67, 86],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0
}

const magazineSize: ILevel = {
  name: 'Name.NukeTrooperUpgrades.MagazineSize',
  description: 'Description.NukeTrooperUpgrades.MagazineSize',
  levelDescription: 'Level.Description.NukeTrooperUpgrades.MagazineSize',
  values: [
    {value: 1},
    {value: 2},
    {value: 3},
    {value: 4},
    {value: 5},
    {value: 6},
  ],
  ptsCosts: [0, 20, 20, 30, 40, 40],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0
}

const ammoCost: ILevel = {
  name: 'Name.NukeTrooperUpgrades.AmmoCost',
  description: 'Description.NukeTrooperUpgrades.AmmoCost',
  levelDescription: 'Level.Description.NukeTrooperUpgrades.AmmoCost',
  values: [
    {value: 200},
    {value: 180},
    {value: 160},
    {value: 140},
    {value: 120},
    {value: 100},
  ],
  ptsCosts: [0, 10, 20, 30, 40, 50],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0
}

const reloadSpeed: ILevel = {
  name: 'Name.NukeTrooperUpgrades.ReloadSpeed',
  description: 'Description.NukeTrooperUpgrades.ReloadSpeed',
  levelDescription: 'Level.Description.NukeTrooperUpgrades.ReloadSpeed',
  values: [
    {value: 18},
    {value: 16},
    {value: 14},
    {value: 12},
    {value: 9},
    {value: 6},
  ],
  ptsCosts: [0, 10, 15, 20, 25, 30],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0
}

const flashbangCharges: ILevel = {
  name: 'Name.NukeTrooperUpgrades.FlashbangCharges',
  description: 'Description.NukeTrooperUpgrades.FlashbangCharges',
  levelDescription: 'Level.Description.NukeTrooperUpgrades.FlashbangCharges',
  values: [
    {value: 3},
    {value: 5},
    {value: 8},
  ],
  ptsCosts: [0, 30, 50],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0
}

const flashbangDuration: ILevel = {
  name: 'Name.NukeTrooperUpgrades.FlashbangDuration',
  description: 'Description.NukeTrooperUpgrades.FlashbangDuration',
  levelDescription: 'Level.Description.NukeTrooperUpgrades.FlashbangDuration',
  values: [
    {cooldown: 10, duration: 10},
    {cooldown: 20, duration: 20},
  ],
  ptsCosts: [0, 50],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0
}

const teleport: ILevel = {
  name: 'Name.NukeTrooperUpgrades.Teleport',
  description: 'Description.NukeTrooperUpgrades.Teleport',
  levelDescription: 'Level.Description.NukeTrooperUpgrades.Teleport',
  values: [
    {special: "teleport not obtained"},
    {cooldown: 8},
    {cooldown: 12, duration: 10, special: 'Camouflage'},
    {cooldown: 15, duration: 10, special: 'Super Camouflage'}
  ],
  ptsCosts: [],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0
}

const oculus: ILevel = {
  name: 'Name.NukeTrooperUpgrades.Oculus',
  description: 'Description.NukeTrooperUpgrades.Oculus',
  levelDescription: 'Level.Description.NukeTrooperUpgrades.Oculus',
  values: [
    {special: 'oculus not obtained'},
    {special: 'oculus obtained!'},
  ],
  ptsCosts: [0, 100],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0
}

const nuclearStrike: ILevel = {
  name: 'Name.NukeTrooperUpgrades.NuclearStrike',
  description: 'Description.NukeTrooperUpgrades.NuclearStrike',
  levelDescription: 'Level.Description.NukeTrooperUpgrades.NuclearStrike',
  values: [
    {special: 'nuke not obtained'},
    {value: 60},
    {value: 45},
    {value: 30},
  ],
  ptsCosts: [0, 100, 50, 75],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0
}

const superCamouflage: ILevel = {
  name: 'Name.NukeTrooperUpgrades.SuperCamouflage',
  description: 'Description.NukeTrooperUpgrades.SuperCamouflage',
  levelDescription: 'Level.Description.NukeTrooperUpgrades.SuperCamouflage',
  values: [
    {special: 'superCamouflage not obtained'},
    {special: 'superCamouflage obtained:'},
  ],
  ptsCosts: [0, 100],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0
}


export const nukeTrooperUpgrades: ILevel[] = [
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
  nuclearStrike,
  superCamouflage
]