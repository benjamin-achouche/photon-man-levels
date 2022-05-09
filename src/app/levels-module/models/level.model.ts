export interface ILevel {
  name: string;
  description: string;
  ptsCosts: number[];
  icon: string;
}

export interface ILevelBasic extends ILevel {
  values: (boolean | number)[];
}

export interface IAbilityDetail {
  energyCost?: number;
  range?: number;
  visibility?: number;
  cooldown?: number;
  duration?: number;
  damagePrimary?: number;
  damageSecondary?: number;
  occurences?: number;
  special?: string;
}

export interface ILevelAbilityNotDefault extends ILevel {
  values: (boolean | IAbilityDetail)[]
}

export interface ILevelAbilityDetail extends ILevel {
  values: IAbilityDetail[];
}