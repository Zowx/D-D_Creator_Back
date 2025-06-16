import { Race, RaceCandidate } from '@app/core/models/models';

export class RaceDbo {
  id: bigint;
  name: string;
  description: string;
  subraceOfId?: bigint;

  constructor(data?: Partial<RaceDbo>) {
    Object.assign(this, data);
  }

  toModel(): Race {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      traitsId: [], // Will be populated separately with traits
      subrace_of: this.subraceOfId,
    };
  }

  static fromModel(model: Race): RaceDbo {
    return new RaceDbo({
      id: model.id,
      name: model.name,
      description: model.description,
      subraceOfId: model.subrace_of,
    });
  }

  static fromDb(dbData: any): RaceDbo {
    return new RaceDbo({
      id: dbData.id,
      name: dbData.name,
      description: dbData.description,
      subraceOfId: dbData.subraceOfId,
    });
  }
}

export class RaceCandidateDbo {
  name: string;
  description: string;
  subraceOfId?: bigint;

  constructor(data?: Partial<RaceCandidateDbo>) {
    Object.assign(this, data);
  }

  static fromModel(model: RaceCandidate): RaceCandidateDbo {
    return new RaceCandidateDbo({
      name: model.name,
      description: model.description,
      subraceOfId: model.subrace_of,
    });
  }

  toDb(): any {
    return {
      name: this.name,
      description: this.description ?? 'No description available',
      subraceOfId: this.subraceOfId,
    };
  }
}
