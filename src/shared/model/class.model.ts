import { Ability } from './ability.model';

export interface Class {
  id: bigint;
  name: string;
  hitDie: number;
  savingThrows: Ability[];
  subClass?: bigint;
}

export interface ClassCandidate {
  name: string;
  hitDice: number;
  savingThrows: bigint[];
  subClass?: bigint;
}
