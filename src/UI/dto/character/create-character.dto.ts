import {
  IsArray,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';
import {
  Character,
  CharacterCandidate
} from '../../../core/models/character.model';
import { CharacterAbilityCandidate } from '../../../core/models/character.model';

export class CreateCharacterDto implements CharacterCandidate {
  @IsInt() @Type(() => Number) raceId: bigint;
  @IsInt() @Type(() => Number) classId: bigint;
  @IsInt() @Type(() => Number) backgroundId: bigint;
  @IsInt() @Type(() => Number) alignmentId: bigint;
  @IsOptional() @IsString() userId?: string;

  @IsNumber() xp: number;
  @IsInt() @Min(1) level: number;
  @IsString() name: string;
  @IsString() player: string;
  @IsInt() @Type(() => Number) AC: number;
  @IsInt() @Type(() => Number) speed: number;
  @IsInt() @Type(() => Number) hp: number;
  @IsInt() @Type(() => Number) maxHp: number;
  @IsInt() @Type(() => Number) tempHp: number;

  @IsString() personality: string;
  @IsString() ideals: string;
  @IsString() bonds: string;
  @IsString() flaws: string;

  @IsInt() @Type(() => Number) age: number;
  @IsString() height: string;
  @IsString() weight: string;
  @IsString() eyes: string;
  @IsString() skin: string;
  @IsString() hair: string;

  @IsString() appearance: string;
  @IsString() allies: string;
  @IsString() backstory: string;
  @IsString() treasure: string;
  @IsString() traits: string;

  @IsArray()
  @IsInt({ each: true })
  @Type(() => Number)
  skillIds: bigint[];

  @IsArray()
  @IsInt({ each: true })
  @Type(() => Number)
  languageIds: bigint[];

  @IsArray()
  @IsInt({ each: true })
  @Type(() => Number)
  abilitieIds: bigint[];

  ToModel(id: bigint): Character {
     return {
  id,
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
  skillIds: this.skillIds,
  languageIds: this.languageIds,
  abilitieIds: this.abilitieIds,
};
}
ToCandidate(): CharacterCandidate {
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
    skillIds: [...this.skillIds],
    languageIds: [...this.languageIds],
    abilitieIds: [...this.abilitieIds],
  };
}
}
