import { Language, LanguageCandidate } from '@app/core/models/models';

export class LanguageDbo {
  id: bigint;
  name: string;
  description: string;
  exotic: boolean;
  secret: boolean;

  constructor(data?: Partial<LanguageDbo>) {
    Object.assign(this, data);
  }

  toModel(): Language {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      exotic: this.exotic,
      secret: this.secret,
    };
  }

  static fromModel(model: Language): LanguageDbo {
    return new LanguageDbo({
      id: model.id,
      name: model.name,
      description: model.description,
      exotic: model.exotic,
      secret: model.secret,
    });
  }

  static fromDb(dbData: any): LanguageDbo {
    return new LanguageDbo({
      id: dbData.id,
      name: dbData.name,
      description: dbData.description,
      exotic: dbData.exotic,
      secret: dbData.secret,
    });
  }
}

export class LanguageCandidateDbo {
  name: string;
  description: string;
  exotic: boolean;
  secret: boolean;

  constructor(data?: Partial<LanguageCandidateDbo>) {
    Object.assign(this, data);
  }

  static fromModel(model: LanguageCandidate): LanguageCandidateDbo {
    return new LanguageCandidateDbo({
      name: model.name,
      description: model.description,
      exotic: model.exotic,
      secret: model.secret,
    });
  }

  toDb(): any {
    return {
      name: this.name,
      description: this.description,
      exotic: this.exotic,
      secret: this.secret,
    };
  }
}
