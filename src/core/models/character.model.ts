import { Alignment } from './alignment.model';
import { Background } from './background.model';
import { Class } from './class.model';
import { Race } from './race.model';
import { Skill } from './skill.model';

export interface Character {
  id: bigint;
  raceId: bigint;
  race: Race;
  classId: bigint;
  class: Class;
  backgroundId: bigint;
  background: Background;
  alignmentId: bigint;
  alignment: Alignment;
  userId?: string;

  xp: number;
  level: number;
  name: string;
  player: string;
  AC: number;
  speed: number;
  hp: number;
  maxHp: number;
  tempHp: number;
  personality: string;
  ideals: string;
  bonds: string;
  flaws: string;
  age: number;
  height: string;
  weight: string;
  eyes: string;
  skin: string;
  hair: string;
  appearance: string;
  allies: string;
  backstory: string;
  treasure: string;
  traits: string;

  abilities: CharacterAbility[];
  skills: Skill[];
  languages: CharacterLanguage[];
}

export interface CharacterCandidate {
  raceId: bigint;
  classId: bigint;
  backgroundId: bigint;
  alignmentId: bigint;
  userId?: bigint;

  xp: number;
  level: number;
  name: string;
  player: string;
  AC: number;
  speed: number;
  hp: number;
  maxHp: number;
  tempHp: number;
  personality: string;
  ideals: string;
  bonds: string;
  flaws: string;
  age: number;
  height: string;
  weight: string;
  eyes: string;
  skin: string;
  hair: string;
  appearance: string;
  allies: string;
  backstory: string;
  treasure: string;
  traits: string;

  abilities: CharacterAbilityCandidate[];
  skillIds: Skill[];
  languages: CharacterLanguageCandidate[];
}


export interface CharacterSkill {
  id: bigint;
  characterId: bigint;
  skills: bigint;
}

export interface CharacterSkillCandidate {
  characterId: bigint;
  skills: bigint;
}

export interface CharacterAbility {
  id: bigint;
  value: string;
  characterId: bigint;
  abilityId: bigint[];
}

export interface CharacterAbilityCandidate {
  value: string;
  characterId: bigint;
  abilityId: bigint[];
}

export interface CharacterLanguage {
  id: bigint;
  characterId: BigInt;
  languageId:  BigInt[];

}
export interface CharacterLanguageCandidate {
  characterId: BigInt;
  languageId:  BigInt[];

}