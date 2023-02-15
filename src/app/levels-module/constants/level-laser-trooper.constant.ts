import { ILevel } from '../models/level.model';

const degats: ILevel = {
  name: 'Name.LaserTrooperUpgrades.Degats',
  description: 'Description.LaserTrooperUpgrades.Degats',
  levelDescription: 'Level.Description.LaserTrooperUpgrades.Degats',
  values: [
    { value: 9 },
    { value: 10 },
    { value: 12 },
    { value: 15 },
    { value: 18 },
    { value: 22 },
  ],
  ptsCosts: [0, 21, 32, 49, 67, 86],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0,
};

const portee: ILevel = {
  name: 'Name.LaserTrooperUpgrades.Portee',
  description: 'Description.LaserTrooperUpgrades.Portee',
  levelDescription: 'Level.Description.LaserTrooperUpgrades.Portee',
  values: [
    { range: 5, visibility: 8.5 },
    { range: 5.5, visibility: 9 },
    { range: 6, visibility: 9.75 },
    { range: 6.5, visibility: 10.25 },
    { range: 7, visibility: 11 },
    { range: 8, visibility: 12 },
  ],
  ptsCosts: [0, 16, 25, 39, 53, 69],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0,
};

const attackSpeed: ILevel = {
  name: 'Name.LaserTrooperUpgrades.AttackSpeed',
  description: 'Description.LaserTrooperUpgrades.AttackSpeed',
  levelDescription: 'Level.Description.LaserTrooperUpgrades.AttackSpeed',
  values: [
    { value: 0.3 },
    { value: 0.27 },
    { value: 0.24 },
    { value: 0.21 },
    { value: 0.18 },
    { value: 0.15 },
  ],
  ptsCosts: [0, 21, 32, 49, 67, 86],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0,
};

const tirCharge: ILevel = {
  name: 'Name.LaserTrooperUpgrades.TirCharge',
  description: 'Description.LaserTrooperUpgrades.TirCharge',
  levelDescription: 'Level.Description.LaserTrooperUpgrades.TirCharge',
  values: [
    { energyCost: 20, damagePrimary: 100 },
    { energyCost: 25, damagePrimary: 160 },
    { energyCost: 30, damagePrimary: 250 },
  ],
  ptsCosts: [0, 60, 80],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0,
};

const G4Charges: ILevel = {
  name: 'Name.LaserTrooperUpgrades.G4Charges',
  description: 'Description.LaserTrooperUpgrades.G4Charges',
  levelDescription: 'Level.Description.LaserTrooperUpgrades.G4Charges',
  values: [
    { prerequisite: 'Not obtained G4Charges' },
    { energyCost: 50, damagePrimary: 25, damageSecondary: 5, occurences: 18 },
    { energyCost: 60, damagePrimary: 35, damageSecondary: 7, occurences: 24 },
    { energyCost: 75, damagePrimary: 50, damageSecondary: 10, occurences: 36 },
  ],
  ptsCosts: [0, 80, 60, 60],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0,
};

const EMPX71: ILevel = {
  name: 'Name.LaserTrooperUpgrades.EMPX71',
  description: 'Description.LaserTrooperUpgrades.EMPX71',
  levelDescription: 'Level.Description.LaserTrooperUpgrades.EMPX71',
  values: [
    { prerequisite: 'Not obtained EMPX71' },
    {
      energyCost: 25,
      cooldown: 10,
      special: [
        'Removes detection',
        'reveals cloaked units',
        'removes all shields',
        'removes all energy',
      ],
    },
    {
      energyCost: 35,
      cooldown: 12,
      special: [
        'Removes detection',
        'reveals cloaked units',
        'removes all shields',
        'removes all energy',
        'lose 3 range',
      ],
    },
    {
      energyCost: 50,
      cooldown: 15,
      special: [
        'Removes detection',
        'reveals cloaked units',
        'removes all shields',
        'removes all energy',
        'lose 3 range',
        'reduce speed by 50%',
      ],
    },
  ],
  ptsCosts: [0, 60, 35, 50],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0,
};

const bouclierPsi: ILevel = {
  name: 'Name.LaserTrooperUpgrades.BouclierPsi',
  description: 'Description.LaserTrooperUpgrades.BouclierPsi',
  levelDescription: 'Level.Description.LaserTrooperUpgrades.BouclierPsi',
  values: [
    { prerequisite: 'Not obtained BouclierPsi' },
    {
      energyCost: 75,
      prerequisite: 'Not obtained shield overcharge',
      special: [
        'double shield regen',
        'double shield armor',
        'reduce shield damage to max of 20',
      ],
    },
    {
      energyCost: 75,
      special: [
        'double shield regen',
        'double shield armor',
        'reduce shield damage to max of 20',
        'press X to overcharge => empty shields and repel enemies while inflicting up to 100 damage and stun them for 10 secs',
      ],
    },
  ],
  ptsCosts: [0, 100, 150],
  icon: '/assets/images/dummy_icon.png',
  currentLevel: 0,
};

export const laserTrooperUpgrades: ILevel[] = [
  degats,
  portee,
  attackSpeed,
  tirCharge,
  G4Charges,
  EMPX71,
  bouclierPsi,
];
