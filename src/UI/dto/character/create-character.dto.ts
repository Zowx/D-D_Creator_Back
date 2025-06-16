import {
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
  IsNotEmpty,
  ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';


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
}
