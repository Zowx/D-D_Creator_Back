import { Character, CharacterAbility, CharacterAbilityCandidate, CharacterCandidate } from '@core/models/character.model';

class CharacterAbilityDBO {
  abilityId: bigint;
  value: number;
  
  constructor(data?: Partial<CharacterAbilityDBO>) {
    Object.assign(this, data);
  }

  toDb(): any {
    return {
      abilityId: this.abilityId,
      value: this.value,
    };
  }

  static fromDb(dbData: any): CharacterAbilityDBO {
    return new CharacterAbilityDBO({
      abilityId: dbData.abilityId,
      value: dbData.value,
    });
  }

  toModel(): CharacterAbility {
    return {
      abilityId: this.abilityId,
      value: this.value,
    };
  }

  static fromModel(model: CharacterAbility): CharacterAbilityDBO {
    return new CharacterAbilityDBO({
      abilityId: model.abilityId,
      value: model.value,
    });
  }
}

class CharacterAbilityDBOCandidate {
  abilityId: bigint;
  value: number;

  constructor(data?: Partial<CharacterAbilityDBOCandidate>) {
    Object.assign(this, data);
  }

  toDb(): any {
    return {
      abilityId: this.abilityId,
      value: this.value,
    };
  }
  static fromModel(model: CharacterAbilityCandidate): CharacterAbilityDBOCandidate {
    return new CharacterAbilityDBOCandidate({
      abilityId: model.abilityId,
      value: model.value,
    });
  }
}

export class CharacterDbo {
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

  abilities: CharacterAbilityDBO[];
  skills: bigint[];
  languages: bigint[];

  constructor(data?: Partial<CharacterDbo>) {
    Object.assign(this, data);
  }

  toModel(): Character {
    return {
      id: this.id,
      raceId: this.raceId,
      classId: this.classId,
      backgroundId: this.backgroundId,
      alignmentId: this.alignmentId,
      userId: this.userId,

      xp: this.xp,
      level: this.level,
      name: this.name,
      player: this.player,
      AC: this.AC,
      speed: this.speed,
      hp: this.hp,
      maxHp: this.maxHp,
      tempHp: this.tempHp,
      personality: this.personality,
      ideals: this.ideals,
      bonds: this.bonds,
      flaws: this.flaws,
      age: this.age,
      height: this.height,
      weight: this.weight,
      eyes: this.eyes,
      skin: this.skin,
      hair: this.hair,
      appearance: this.appearance,
      allies: this.allies,
      backstory: this.backstory,
      treasure: this.treasure,
      traits: this.traits,

      abilities: this.abilities ?? [],
      skillIds: this.skills ?? [],
      languageIds: this.languages ?? [],
    };
  }

  static fromDb(dbData: any): CharacterDbo {
    return new CharacterDbo({
      id: dbData.id,
      raceId: dbData.raceId,
      classId: dbData.classId,
      backgroundId: dbData.backgroundId,
      alignmentId: dbData.alignmentId,
      userId: dbData.userId,

      xp: dbData.xp,
      level: dbData.level,
      name: dbData.name,
      player: dbData.player,
      AC: dbData.AC,
      speed: dbData.speed,
      hp: dbData.hp,
      maxHp: dbData.maxHp,
      tempHp: dbData.tempHp,
      personality: dbData.personality,
      ideals: dbData.ideals,
      bonds: dbData.bonds,
      flaws: dbData.flaws,
      age: dbData.age,
      height: dbData.height,
      weight: dbData.weight,
      eyes: dbData.eyes,
      skin: dbData.skin,
      hair: dbData.hair,
      appearance: dbData.appearance,
      allies: dbData.allies,
      backstory: dbData.backstory,
      treasure: dbData.treasure,
      traits: dbData.traits,

      abilities: dbData.abilities ? dbData.abilities.map(a => CharacterAbilityDBO.fromDb(a)) : [],
      skills: dbData.skills ? dbData.skills.map(a => a.id) : [],
      languages: dbData.languages ? dbData.languages.map(a => a.id) : [],
    });
  }
}

export class CharacterCandidateDbo {
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

  abilities: CharacterAbilityDBOCandidate[];
  skillIds: bigint[];
  languageIds: bigint[];

  constructor(data?: Partial<CharacterCandidateDbo>) {
    Object.assign(this, data);
  }

  static fromModel(model: CharacterCandidate): CharacterCandidateDbo {
    return new CharacterCandidateDbo({
      raceId: model.raceId,
      classId: model.classId,
      backgroundId: model.backgroundId,
      alignmentId: model.alignmentId,
      userId: model.userId,

      xp: model.xp,
      level: model.level,
      name: model.name,
      player: model.player,
      AC: model.AC,
      speed: model.speed,
      hp: model.hp,
      maxHp: model.maxHp,
      tempHp: model.tempHp,
      personality: model.personality,
      ideals: model.ideals,
      bonds: model.bonds,
      flaws: model.flaws,
      age: model.age,
      height: model.height,
      weight: model.weight,
      eyes: model.eyes,
      skin: model.skin,
      hair: model.hair,
      appearance: model.appearance,
      allies: model.allies,
      backstory: model.backstory,
      treasure: model.treasure,
      traits: model.traits,

      abilities: model.abilities.map(a => CharacterAbilityDBOCandidate.fromModel(a)),
      skillIds: model.skillIds,
      languageIds: model.languageIds,
    });
  }

  toDb(): any {
    return {
      raceId: this.raceId,
      classId: this.classId,
      backgroundId: this.backgroundId,
      alignmentId: this.alignmentId,
      user: this.userId,

      xp: this.xp,
      level: this.level,
      name: this.name,
      player: this.player,
      AC: this.AC,
      speed: this.speed,
      hp: this.hp,
      max_hp: this.maxHp,
      temp_hp: this.tempHp,
      personality: this.personality,
      ideals: this.ideals,
      bonds: this.bonds,
      flaws: this.flaws,
      age: this.age,
      height: this.height,
      weight: this.weight,
      eyes: this.eyes,
      skin: this.skin,
      hair: this.hair,
      appearance: this.appearance,
      allies: this.allies,
      backstory: this.backstory,
      treasure: this.treasure,
      traits: this.traits,

      abilities: {
        create: this.abilities.map(a => a.toDb()),
      },
      skills: {
        connect: this.skillIds.map(id => ({ id })),
      },
      languages: {
        connect: this.languageIds.map(id => ({ id })),
      },
    };
  }
}
