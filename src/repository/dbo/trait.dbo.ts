import { Traits, TraitsCandidate } from '@core/models/models';

export class TraitsDbo {
  id: bigint;
  name: string;
  description: string;

  constructor(data?: Partial<TraitsDbo>) {
    Object.assign(this, data);
  }

  toModel(): Traits {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
    };
  }

  static fromModel(model: Traits): TraitsDbo {
    return new TraitsDbo({
      id: model.id,
      name: model.name,
      description: model.description,
    });
  }

  static fromDb(dbData: any): TraitsDbo {
    return new TraitsDbo({
      id: dbData.id,
      name: dbData.name,
      description: dbData.description,
    });
  }
}

export class TraitsCandidateDbo {
  name: string;
  description: string;

  constructor(data?: Partial<TraitsCandidateDbo>) {
    Object.assign(this, data);
  }

  static fromModel(model: TraitsCandidate): TraitsCandidateDbo {
    return new TraitsCandidateDbo({
      name: model.name,
      description: model.description,
    });
  }

  toDb(): any {
    return {
      name: this.name,
      description: this.description,
    };
  }
}
