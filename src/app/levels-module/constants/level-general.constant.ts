import { ILevel } from "../models/level.model"

const vie: ILevel = {
  name: 'Name.GeneralUpgrades.Vie',
  description: 'Description.GeneralUpgrades.Vie',
  levelDescription: 'Level.Description.GeneralUpgrades.Vie',
  values: [
    {value: 75},
    {value: 85},
    {value: 100},
    {value: 115},
    {value: 130},
    {value: 150},
  ],
  ptsCosts: [0, 10, 18, 31, 37, 50],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0
}

const bouclier: ILevel = {
  name: 'Name.GeneralUpgrades.Bouclier',
  description: 'Description.GeneralUpgrades.Bouclier',
  levelDescription: 'Level.Description.GeneralUpgrades.Bouclier',
  values: [
    {value: 75, cooldown: 5},
    {value: 85, cooldown: 4},
    {value: 100, cooldown: 3},
    {value: 115, cooldown: 2},
    {value: 130, cooldown: 1},
    {value: 150, cooldown: 0},
  ],
  ptsCosts: [0, 10, 18, 31, 37, 50],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0
}

const energie: ILevel = {
  name: 'Name.GeneralUpgrades.Energie',
  description: 'Description.GeneralUpgrades.Energie',
  levelDescription: 'Level.Description.GeneralUpgrades.Energie',
  values: [
    {value: 150},
    {value: 175},
    {value: 200},
    {value: 225},
    {value: 250},
    {value: 300},
  ],
  ptsCosts: [0, 14, 21, 37, 46, 60],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0
}

const regenVie: ILevel = {
  name: 'Name.GeneralUpgrades.RegenVie',
  description: 'Description.GeneralUpgrades.RegenVie',
  levelDescription: 'Level.Description.GeneralUpgrades.RegenVie',
  values: [
    {value: 0.77},
    {value: 0.97},
    {value: 1.25},
    {value: 1.63},
    {value: 2.15},
    {value: 3},
  ],
  ptsCosts: [0, 10, 18, 31, 37, 50],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0
}

const regenBouclier: ILevel = {
  name: 'Name.GeneralUpgrades.RegenBouclier',
  description: 'Description.GeneralUpgrades.RegenBouclier',
  levelDescription: 'Level.Description.GeneralUpgrades.RegenBouclier',
  values: [
    {value: 0.77, cooldown: 5},
    {value: 0.97, cooldown: 4},
    {value: 1.25, cooldown: 3},
    {value: 1.63, cooldown: 2},
    {value: 2.15, cooldown: 1},
    {value: 3, cooldown: 0},
  ],
  ptsCosts: [0, 10, 18, 31, 37, 50],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0
}

const regenEnergie: ILevel = {
  name: 'Name.GeneralUpgrades.RegenEnergie',
  description: 'Description.GeneralUpgrades.RegenEnergie',
  levelDescription: 'Level.Description.GeneralUpgrades.RegenEnergie',
  values: [
    {value: 1.283},
    {value: 1.533},
    {value: 2.083},
    {value: 2.717},
    {value: 3.583},
    {value: 5},
  ],
  ptsCosts: [0, 16, 25, 39, 53, 69],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0
}

const armure: ILevel = {
  name: 'Name.GeneralUpgrades.Armure',
  description: 'Description.GeneralUpgrades.Armure',
  levelDescription: 'Level.Description.GeneralUpgrades.Armure',
  values: [
    {value: 0},
    {value: 1},
    {value: 2},
    {value: 3},
    {value: 4},
    {value: 5},
  ],
  ptsCosts: [0, 14, 21, 37, 46, 60],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0
}

const armureBouclier: ILevel = {
  name: 'Name.GeneralUpgrades.ArmureBouclier',
  description: 'Description.GeneralUpgrades.ArmureBouclier',
  levelDescription: 'Level.Description.GeneralUpgrades.ArmureBouclier',
  values: [
    {value: 0},
    {value: 1},
    {value: 2},
    {value: 3},
    {value: 4},
    {value: 5},
  ],
  ptsCosts: [0, 14, 21, 37, 46, 60],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0
}

const vitesse: ILevel = {
  name: 'Name.GeneralUpgrades.Vitesse',
  description: 'Description.GeneralUpgrades.Vitesse',
  levelDescription: 'Level.Description.GeneralUpgrades.Vitesse',
  values: [
    {value: 2.75},
    {value: 3},
    {value: 3.25},
    {value: 3.5},
    {value: 3.75},
    {value: 4.25},
  ],
  ptsCosts: [0, 10, 18, 31, 37, 50],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0
}

const revive: ILevel = {
  name: 'Name.GeneralUpgrades.Revive',
  description: 'Description.GeneralUpgrades.Revive',
  levelDescription: 'Level.Description.GeneralUpgrades.Revive',
  values: [
    {value: 10},
    {value: 8},
    {value: 5},
    {value: 3},
  ],
  ptsCosts: [0, 20, 35, 50],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0
}

const modeSwap: ILevel = {
  name: 'Name.GeneralUpgrades.ModeSwap',
  description: 'Description.GeneralUpgrades.ModeSwap',
  levelDescription: 'Level.Description.GeneralUpgrades.ModeSwap',
  values: [
    {value: 30},
    {value: 22},
    {value: 15},
    {value: 10},
  ],
  ptsCosts: [0, 20, 30, 50],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0
}

const camouflage: ILevel = {
  name: 'Name.GeneralUpgrades.Camouflage',
  description: 'Description.GeneralUpgrades.Camouflage',
  levelDescription: 'Level.Description.GeneralUpgrades.Camouflage',
  values: [
    // {value: false},
    // {value: true},
  ],
  ptsCosts: [0, 100],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0
}

export const generalUpgrades: ILevel[] = [
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