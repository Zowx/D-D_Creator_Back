import {
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
  IsNotEmpty,
  ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';
import { Character, CharacterCandidate } from '@app/core/models/character.model';


export class CreateCharacterAbilityDto {
  @IsString()
  value: string;

  abilityId: bigint;
}

export class CreateCharacterLanguageDto {
  languageId: bigint;
}

export class CreateCharacterDto {
  raceId: bigint;

  classId: bigint;

  backgroundId: bigint;

  alignmentId: bigint;

  @IsOptional()
  userId?: bigint;

  @IsNumber()
  xp: number;

  @IsNumber()
  level: number;

  @IsString()
  name: string;

  @IsString()
  player: string;

  @IsNumber()
  AC: number;

  @IsNumber()
  speed: number;

  @IsNumber()
  hp: number;

  @IsNumber()
  maxHp: number;

  @IsNumber()
  tempHp: number;

  @IsString()
  personality: string;

  @IsString()
  ideals: string;

  @IsString()
  bonds: string;

  @IsString()
  flaws: string;

  @IsNumber()
  age: number;

  @IsString()
  height: string;

  @IsString()
  weight: string;

  @IsString()
  eyes: string;

  @IsString()
  skin: string;

  @IsString()
  hair: string;

  @IsString()
  appearance: string;

  @IsString()
  allies: string;

  @IsString()
  backstory: string;

  @IsString()
  treasure: string;

  @IsString()
  traits: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCharacterAbilityDto)
  abilities: CreateCharacterAbilityDto[];

  @IsArray()
  skillIds: bigint[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCharacterLanguageDto)
  languages: CreateCharacterLanguageDto[];

  toModel(id: bigint): Character {
    return {
      id: id,
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
      abilities: this.abilities.map(a => ({ abilityId: a.abilityId, value: a.value })),
      skillIds: this.skillIds,
      languages: this.languages.map(l => l.languageId)
    };
  }

  toCandidate(): CharacterCandidate {
    return {
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
      abilities: this.abilities.map(a => ({ abilityId: a.abilityId, value: a.value })),
      skillIds: this.skillIds,
      languages: this.languages.map(l => ({ languageId: l.languageId }))
    };
  }
}
