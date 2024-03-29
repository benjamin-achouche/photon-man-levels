export interface ILevel {
  name: string;
  description: string;
  levelDescription: string;
  ptsCosts: number[];
  icon: string;
  currentLevel: number;
  values: IAbilityDetail[];
}

export interface IAbilityDetail {
  value?: number | number[];
  energyCost?: number;
  range?: number;
  visibility?: number;
  cooldown?: number;
  duration?: number;
  damagePrimary?: number;
  damageSecondary?: number;
  occurences?: number;
  prerequisite?: string;
  special?: string | string[];
}
