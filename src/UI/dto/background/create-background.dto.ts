import {
  Background,
  BackgroundCandidate,
} from '@app/core/models/background.model';
import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { CreateBackgroundAbilityDto } from './create-background-ability.dto';
import { CreateBackgroundSkillDto } from './create-background-skill.dto';
import { CreateBackgroundLanguageDto } from './create-background-language.dto';

export class CreateBackgroundDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @ValidateNested({ each: true })
  @Type(() => CreateBackgroundAbilityDto)
  @IsArray()
  ability: CreateBackgroundAbilityDto[];

  @IsNumber()
  abilityChoice: number;

  @ValidateNested({ each: true })
  @Type(() => CreateBackgroundSkillDto)
  @IsArray()
  skills: CreateBackgroundSkillDto[];

  @IsNumber()
  skillChoice: number;

  @ValidateNested({ each: true })
  @Type(() => CreateBackgroundLanguageDto)
  @IsArray()
  languages: CreateBackgroundLanguageDto[];

  @IsNumber()
  languagesChoice: number;

  @IsString()
  @IsNotEmpty()
  connectionAndMemento: string;

  @IsString()
  @IsNotEmpty()
  adventuresAndAdvancement: string;

  @IsString()
  @IsNotEmpty()
  featureName: string;

  @IsString()
  @IsNotEmpty()
  featureDescription: string;

  /**
   * Transforme ce DTO en entité persistée Background
   */
  toModel(id: bigint): Background {
    return {
      id,
      name: this.name,
      description: this.description,
      abilityIds: this.ability.map((a) => a.AbilityId),
      abilityChoice: this.abilityChoice,
      skillsIds: this.skills.flatMap((s) => s.SkillsIds),
      skillChoice: this.skillChoice,
      languagesIds: this.languages.map((l) => l.LanguageId),
      languagesChoice: this.languagesChoice,
      connectionAndMemento: this.connectionAndMemento,
      adventuresAndAdvancement: this.adventuresAndAdvancement,
      featureName: this.featureName,
      featureDescription: this.featureDescription,
    };
  }

  /**
   * Transforme ce DTO en objet candidat (BackgroundCandidate)
   */
  toCandidate(): BackgroundCandidate {
    return {
      name: this.name,
      description: this.description,
      ability: this.ability.map((a) => a.toCandidate()),
      abilityChoice: this.abilityChoice,
      skills: this.skills.map((s) => s.toCandidate()),
      skillChoice: this.skillChoice,
      languages: this.languages.map((l) => l.toCandidate()),
      languagesChoice: this.languagesChoice,
      connectionAndMemento: this.connectionAndMemento,
      adventuresAndAdvancement: this.adventuresAndAdvancement,
      featureName: this.featureName,
      featureDescription: this.featureDescription,
    };
  }
  
}
