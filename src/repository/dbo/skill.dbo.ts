import { Skill, SkillCandidate } from '@core/models/models';

export class SkillDbo {
  id: bigint;
  name: string;
  description: string;
  abilityId: bigint;

  constructor(data?: Partial<SkillDbo>) {
    Object.assign(this, data);
  }

  toModel(): Skill {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      abilityId: this.abilityId,
    };
  }

  static fromModel(model: Skill): SkillDbo {
    return new SkillDbo({
      id: model.id,
      name: model.name,
      description: model.description,
      abilityId: model.abilityId,
    });
  }

  static fromDb(dbData: any): SkillDbo {
    return new SkillDbo({
      id: dbData.id,
      name: dbData.name,
      description: dbData.description,
      abilityId: dbData.abilityId,
    });
  }
}

export class SkillCandidateDbo {
  name: string;
  description: string;
  abilityId: bigint;

  constructor(data?: Partial<SkillCandidateDbo>) {
    Object.assign(this, data);
  }

  static fromModel(model: SkillCandidate): SkillCandidateDbo {
    return new SkillCandidateDbo({
      name: model.name,
      description: model.description,
      abilityId: model.abilityId,
    });
  }

  toDb(): any {
    return {
      name: this.name,
      description: this.description,
      ability: {
        connect: { id: this.abilityId },
      },
    };
  }
}
