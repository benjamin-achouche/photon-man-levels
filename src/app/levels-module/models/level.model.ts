export interface ILevel {
  ptsCosts: number[];
  icon: string;
}

export interface ILevelBasic {
  values: number[];
}

export interface ILevelAbilityBool extends ILevel {
  values: boolean[];
}

export interface ILevelAbilityNumBool extends ILevel {
  values: (boolean | number)[];
}

export interface IAbilityDetail {
  energyCost?: number;
  range?: number;
  cooldown?: number;
  damagePrimary?: number;
  damageSecondary: number;
  add moreeeee
}

export interface ILevelAbilityDetail extends ILevel {
  values: [];
}




// Laser Trooper
// Dégâts: [8 - 9 - 10 - 12 - 14 - 16] {0 - 21 - 32 - 49 - 67 - 86}
// Portée: [5/8.5 - 5.5/9 - 6/9.75 - 6.5/10.25 - 7/11 - 8/12] {0 - 16 - 25 - 39 - 53 - 69}
// Attack Speed: [0.3 - 0.27 - 0.24 - 0.21 - 0.18 - 0.15] {0 - 21 - 32 - 49 - 67 - 86}
// Tir Chargé: [(25; 12; 100) - (30; 12; 160) - (35; 12; 250)] {0 - 60 - 80}
// G-4 Charges: [NO - (75; 20; 7; 40) - (85; 20; 7; 50) - (100; 20; 7; 65) ] {0 - 80 - 60 - 60}
// EMP X-71: [NO - (25; 10; 9) - (30; 12; 9) - (35; 15; 9)] {0 - 60 - 35 - 50}
// Bouclier Psi: [NO - (75) - (150)] {0 - 100 - 150}