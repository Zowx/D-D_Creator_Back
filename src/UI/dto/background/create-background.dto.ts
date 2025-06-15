import {IsString,IsNotEmpty,MaxLength,IsArray,ValidateNested,IsNumber,} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateBackgroundAbilityDto } from './create-background-ability.dto';
import { CreateBackgroundSkillDto } from './create-background-skill.dto';
import { CreateBackgroundLanguageDto } from './create-background-language.dto';

export class CreateBackgroundDto {
  @IsString() @IsNotEmpty() @MaxLength(100)
  name: string;

  @IsString() @IsNotEmpty() @MaxLength(1000)
  description: string;

  @IsArray() @ValidateNested({ each: true })
  @Type(() => CreateBackgroundAbilityDto)
  ability: CreateBackgroundAbilityDto[];

  @IsNumber()
  abilityChoice: number;

  @IsArray() @ValidateNested({ each: true })
  @Type(() => CreateBackgroundSkillDto)
  skills: CreateBackgroundSkillDto[];

  @IsNumber()
  skillChoice: number;

  @IsArray() @ValidateNested({ each: true })
  @Type(() => CreateBackgroundLanguageDto)
  languages: CreateBackgroundLanguageDto[];

  @IsNumber()
  languagesChoice: number;

  @IsString() @IsNotEmpty()
  connectionAndMemento: string;

  @IsString() @IsNotEmpty()
  adventuresAndAdvancement: string;

  @IsString() @IsNotEmpty()
  featureName: string;

  @IsString() @IsNotEmpty()
  featureDescription: string;
}
