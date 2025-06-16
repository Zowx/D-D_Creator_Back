import { Injectable, NotFoundException } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { CreateBackgroundDto } from '@UI/dto/background/create-background.dto';
import { UpdateBackgroundDto } from '@UI/dto/background/update-background.dto';

export interface BackgroundAbility {
  id: bigint;
  AbilityId: bigint;
  value: number;
  BackgroundId: bigint;
}

export interface BackgroundSkill {
  id: bigint;
  SkillsIds: bigint[];
  BackgroundId: bigint;
}

export interface BackgroundLanguage {
  id: bigint;
  LanguageId: bigint;
  BackgroundId: bigint;
}

export interface Background {
  id: bigint;
  name: string;
  description: string;
  ability: BackgroundAbility[];
  abilityChoice: number;
  skills: BackgroundSkill[];
  skillChoice: number;
  languages: BackgroundLanguage[];
  languagesChoice: number;
  connectionAndMemento: string;
  adventuresAndAdvancement: string;
  featureName: string;
  featureDescription: string;
}

@Injectable()
export class BackgroundsService {
  private backgrounds: Background[] = [];

  private generateId(): bigint {
    return BigInt('0x' + randomBytes(8).toString('hex'));
  }

  findAll(): Background[] {
    return this.backgrounds;
  }

  findOne(id: bigint): Background {
    const bg = this.backgrounds.find(b => b.id === id);
    if (!bg) throw new NotFoundException(`Background ${id} introuvable`);
    return bg;
  }

  create(dto: CreateBackgroundDto): Background {
    const bgId = this.generateId();

    const abilityLinks = dto.ability.map(item => ({
      id: this.generateId(),
      AbilityId: BigInt(item.AbilityId),
      value: item.value,
      BackgroundId: bgId,
    }));

    const skillLinks = dto.skills.map(item => ({
      id: this.generateId(),
      SkillsIds: item.SkillsIds.map(s => BigInt(s)),
      BackgroundId: bgId,
    }));

    const languageLinks = dto.languages.map(item => ({
      id: this.generateId(),
      LanguageId: BigInt(item.LanguageId),
      BackgroundId: bgId,
    }));

    const newBg: Background = {
      id: bgId,
      name: dto.name,
      description: dto.description,
      ability: abilityLinks,
      abilityChoice: dto.abilityChoice,
      skills: skillLinks,
      skillChoice: dto.skillChoice,
      languages: languageLinks,
      languagesChoice: dto.languagesChoice,
      connectionAndMemento: dto.connectionAndMemento,
      adventuresAndAdvancement: dto.adventuresAndAdvancement,
      featureName: dto.featureName,
      featureDescription: dto.featureDescription,
    };

    this.backgrounds.push(newBg);
    return newBg;
  }

update(id: bigint, dto: UpdateBackgroundDto): Background {
  const existing = this.findOne(id);

  let abilityLinks   = existing.ability;
  let skillLinks     = existing.skills;
  let languageLinks  = existing.languages;

  if (dto.ability) {
    abilityLinks = dto.ability.map(item => ({
      id: this.generateId(),
      AbilityId: BigInt(item.AbilityId),
      value:    item.value,
      BackgroundId: id,
    }));
  }

  if (dto.skills) {
    skillLinks = dto.skills.map(item => ({
      id: this.generateId(),
      SkillsIds: item.SkillsIds.map(s => BigInt(s)),
      BackgroundId: id,
    }));
  }

  if (dto.languages) {
    languageLinks = dto.languages.map(item => ({
      id: this.generateId(),
      LanguageId: BigInt(item.LanguageId),
      BackgroundId: id,
    }));
  }

  const updated: Background = {
    ...existing,
    name: dto.name ?? existing.name,
    description: dto.description ?? existing.description,
    
    ability:       abilityLinks,
    abilityChoice: dto.abilityChoice ?? existing.abilityChoice,
    skills:        skillLinks,
    skillChoice:   dto.skillChoice ?? existing.skillChoice,
    languages:     languageLinks,
    languagesChoice: dto.languagesChoice ?? existing.languagesChoice,

    connectionAndMemento: dto.connectionAndMemento ?? existing.connectionAndMemento,
    adventuresAndAdvancement: dto.adventuresAndAdvancement ?? existing.adventuresAndAdvancement,
    featureName: dto.featureName ?? existing.featureName,
    featureDescription: dto.featureDescription ?? existing.featureDescription,

    id,
  };

  this.backgrounds = this.backgrounds.map(b =>
    b.id === id ? updated : b,
  );

  return updated;
}


  remove(id: bigint): void {
    this.findOne(id);
    this.backgrounds = this.backgrounds.filter(b => b.id !== id);
  }
}
