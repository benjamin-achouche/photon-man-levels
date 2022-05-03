import { ILevel, ILevelSkill } from "../../models/level.model"

const vie: ILevel = {
  values: [75, 85, 100, 115, 130, 150],
  ptsCosts: [0, 10, 18, 31, 37, 50],
  icon: '/assets/images/dummy_icon.png'
}

const bouclier: ILevel = {
  values: [75, 85, 100, 115, 130, 150],
  ptsCosts: [0, 10, 18, 31, 37, 50],
  icon: '/assets/images/dummy_icon.png'
}

const energie: ILevel = {
  values: [150, 175, 200, 225, 250, 300],
  ptsCosts: [0, 14, 21, 37, 46, 60],
  icon: '/assets/images/dummy_icon.png'
}

const regenVie: ILevel = {
  values: [0.77, 0.97, 1.25, 1.63, 2.15, 3],
  ptsCosts: [0, 10, 18, 31, 37, 50],
  icon: '/assets/images/dummy_icon.png'
}

const regenBouclier: ILevel = {
  values: [0.77, 0.97, 1.25, 1.63, 2.15, 3],
  ptsCosts: [0, 10, 18, 31, 37, 50],
  icon: '/assets/images/dummy_icon.png'
}

const regenEnergie: ILevel = {
  values: [1.283, 1.533, 2.083, 2.717, 3.583, 5],
  ptsCosts: [0, 16, 25, 39, 53, 69],
  icon: '/assets/images/dummy_icon.png'
}

const armure: ILevel = {
  values: [0, 1, 2, 3, 4, 5],
  ptsCosts: [0, 14, 21, 37, 46, 60],
  icon: '/assets/images/dummy_icon.png'
}

const armureBouclier: ILevel = {
  values: [0, 1, 2, 3, 4, 5],
  ptsCosts: [0, 14, 21, 37, 46, 60],
  icon: '/assets/images/dummy_icon.png'
}

const vitesse: ILevel = {
  values: [2.75, 3, 3.25, 3.5, 3.75, 4.25],
  ptsCosts: [0, 10, 18, 31, 37, 50],
  icon: '/assets/images/dummy_icon.png'
}

const revive: ILevel = {
  values: [10, 8, 5, 3],
  ptsCosts: [0, 20, 35, 50],
  icon: '/assets/images/dummy_icon.png'
}

const modeSwap: ILevel = {
  values: [30, 22, 15, 10],
  ptsCosts: [0, 20, 30, 50],
  icon: '/assets/images/dummy_icon.png'
}

const camouflage: ILevelSkill = {
  values: [false, true],
  ptsCosts: [0, 100],
  icon: '/assets/images/dummy_icon.png'
}

export const generalUpgrades: (ILevel | ILevelSkill)[] = [
  vie,
  bouclier,
  energie,
  regenVie,
  regenBouclier,
  regenEnergie,
  armure,
  armureBouclier,
  vitesse,
  revive,
  modeSwap,
  camouflage
]