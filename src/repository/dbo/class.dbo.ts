import { Class, ClassCandidate } from '@app/core/models/models';

export class ClassDbo {
  id: bigint;
  name: string;
  caster_type: string;
  subclass: string;
  hit_dice: string;
  savingThrows?: any[];

  constructor(data?: Partial<ClassDbo>) {
    Object.assign(this, data);
  }

  toModel(): Class {
    return {
      id: this.id,
      name: this.name,
      casterType: this.caster_type,
      hitDice: this.hit_dice || '',
      savingThrows: this.savingThrows || [],
      subClass:
        this.subclass && this.subclass !== ''
          ? BigInt(this.subclass)
          : undefined,
    };
  }

  static fromModel(model: Class): ClassDbo {
    return new ClassDbo({
      id: model.id,
      name: model.name,
      caster_type: model.casterType ?? '',
      subclass: model.subClass ? model.subClass.toString() : '',
      hit_dice: model.hitDice || '',
      savingThrows: model.savingThrows,
    });
  }

  static fromDb(dbData: any): ClassDbo {
    return new ClassDbo({
      id: dbData.id,
      name: dbData.name,
      caster_type: dbData.caster_type,
      subclass: dbData.subclass,
      hit_dice: dbData.hit_dice,
      savingThrows: dbData.savingThrows,
    });
  }
}

export class ClassCandidateDbo {
  name: string;
  caster_type: string;
  subclass: string;
  hit_dice: string;
  savingThrows?: bigint[];

  constructor(data?: Partial<ClassCandidateDbo>) {
    Object.assign(this, data);
  }

  static fromModel(model: ClassCandidate): ClassCandidateDbo {
    return new ClassCandidateDbo({
      name: model.name,
      caster_type: model.casterType ?? '',
      subclass: model.subClass ? model.subClass.toString() : '',
      hit_dice: model.hitDice ? model.hitDice.toString() : '',
      savingThrows: model.savingThrows,
    });
  }

  toDb(): any {
    return {
      name: this.name,
      caster_type: this.caster_type,
      subclass: this.subclass,
      hit_dice: this.hit_dice,
      savingThrows: {
        connect: this.savingThrows?.map((id) => ({ id })) || [],
      },
    };
  }
}
