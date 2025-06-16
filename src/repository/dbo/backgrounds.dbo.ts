import {
  Background,
  BackgroundCandidate,
  BackgroundAbilityCandidate,
  BackgroundSkillCandidate,
  BackgroundLanguageCandidate,
} from '@app/core/models/background.model';

export class BackgroundDbo {
  id: bigint;
  name: string;
  description: string;
  abilityIds: bigint[];
  abilityChoice: number;
  skillsIds: bigint[];
  skillChoice: number;
  languagesIds: bigint[];
  languagesChoice: number;
  connectionAndMemento: string;
  adventuresAndAdvancement: string;
  featureName: string;
  featureDescription: string;

  constructor(data?: Partial<BackgroundDbo>) {
    Object.assign(this, data);
  }

  toModel(): Background {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      abilityIds: this.abilityIds ?? [],
      abilityChoice: this.abilityChoice,
      skillsIds: this.skillsIds ?? [],
      skillChoice: this.skillChoice,
      languagesIds: this.languagesIds ?? [],
      languagesChoice: this.languagesChoice,
      connectionAndMemento: this.connectionAndMemento,
      adventuresAndAdvancement: this.adventuresAndAdvancement,
      featureName: this.featureName,
      featureDescription: this.featureDescription,
    };
  }

  static fromDb(dbData: any): BackgroundDbo {
    return new BackgroundDbo({
      id: dbData.id,
      name: dbData.name,
      description: dbData.description,
      abilityIds: dbData.abilities?.map((ab: any) => ab.AbilityId) ?? [],
      abilityChoice: dbData.abilityChoice,
      skillsIds: dbData.skills?.flatMap((sk: any) => sk.SkillsIds) ?? [],
      skillChoice: dbData.skillChoice,
      languagesIds: dbData.languages?.map((lg: any) => lg.LanguageId) ?? [],
      languagesChoice: dbData.languagesChoice,
      connectionAndMemento: dbData.connectionAndMemento,
      adventuresAndAdvancement: dbData.adventuresAndAdvancement,
      featureName: dbData.featureName,
      featureDescription: dbData.featureDescription,
    });
  }
}

export class BackgroundCandidateDbo {
  name: string;
  description: string;
  ability: BackgroundAbilityCandidate[];
  abilityChoice: number;
  skills: BackgroundSkillCandidate[];
  skillChoice: number;
  languages: BackgroundLanguageCandidate[];
  languagesChoice: number;
  connectionAndMemento: string;
  adventuresAndAdvancement: string;
  featureName: string;
  featureDescription: string;

  constructor(data?: Partial<BackgroundCandidateDbo>) {
    Object.assign(this, data);
  }

  static fromModel(model: BackgroundCandidate): BackgroundCandidateDbo {
    return new BackgroundCandidateDbo({
      name: model.name,
      description: model.description,
      ability: model.ability,
      abilityChoice: model.abilityChoice,
      skills: model.skills,
      skillChoice: model.skillChoice,
      languages: model.languages,
      languagesChoice: model.languagesChoice,
      connectionAndMemento: model.connectionAndMemento,
      adventuresAndAdvancement: model.adventuresAndAdvancement,
      featureName: model.featureName,
      featureDescription: model.featureDescription,
    });
  }

  toDb(): any {
    return {
      name: this.name,
      description: this.description,
      abilityChoice: this.abilityChoice,
      skillChoice: this.skillChoice,
      languagesChoice: this.languagesChoice,
      connectionAndMemento: this.connectionAndMemento,
      adventuresAndAdvancement: this.adventuresAndAdvancement,
      featureName: this.featureName,
      featureDescription: this.featureDescription,
      abilities: {
        create: this.ability.map((ab) => ({
          Ability: { connect: { id: ab.AbilityId } },
          value: ab.value,
        })),
      },
      skills: {
        create: this.skills.map((sk) => ({
          Skills: {
            connect: sk.SkillsIds.map((id) => ({ id })),
          },
        })),
      },
      languages: {
        create: this.languages.map((lg) => ({
          Language: { connect: { id: lg.LanguageId } },
        })),
      },
    };
  }
}
