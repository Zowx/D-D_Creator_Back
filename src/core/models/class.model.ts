import { Ability } from './ability.model';

export interface Class {
  id: bigint;
  name: string;
  casterType?: string;
  hitDice: number;
  savingThrows: Ability[];
  subClass?: bigint;
}

export interface ClassCandidate {
  name: string;
  casterType?: string;
  hitDice: number;
  savingThrows: bigint[];
  subClass?: bigint;
}
