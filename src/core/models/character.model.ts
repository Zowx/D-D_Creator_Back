export interface Character {
  id: bigint;
  raceId: bigint;
  classId: bigint;
  backgroundId: bigint;
  alignmentId: bigint;
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
  skillIds: bigint[];
  languageIds: bigint[];
}

export interface CharacterCandidate {
  raceId: bigint;
  classId: bigint;
  backgroundId: bigint;
  alignmentId: bigint;
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

  abilities: CharacterAbilityCandidate[];
  skillIds: bigint[];
  languageIds: bigint[];
}

export interface CharacterSkill {
  id: bigint;
  characterId: bigint;
  skillId: bigint;
}

export interface CharacterSkillCandidate {
  characterId: bigint;
  skillId: bigint;
}

export interface CharacterAbility {
  value: number;
  abilityId: bigint;
}

export interface CharacterAbilityCandidate {
  value: number;
  abilityId: bigint;
}

export interface CharacterLanguage {
  id: bigint;
  characterId: bigint;
  languageId: bigint;
}

export interface CharacterLanguageCandidate {
  characterId: bigint;
  languageId: bigint;
}
