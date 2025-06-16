import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@repository/database.service';
import { Class, ClassCandidate } from '@app/core/models/models';
import { ClassCandidateDbo, ClassDbo } from './dbo/dbo';

@Injectable()
export class ClassesRepository {
  constructor(private readonly database: DatabaseService) {}

  async findAll() {
    const classes = await this.database.class.findMany({
      include: {
        savingThrows: true,
      },
    });
    return classes.map((cls) => ClassDbo.fromDb(cls).toModel());
  }

  async findById(id: bigint) {
    const cls = await this.database.class.findUnique({
      where: { id },
      include: {
        savingThrows: true,
      },
    });

    if (!cls) {
      return null;
    }

    return ClassDbo.fromDb(cls).toModel();
  }

  async create(cls: ClassCandidate) {
    const created = await this.database.class.create({
      data: ClassCandidateDbo.fromModel(cls).toDb(),
      include: {
        savingThrows: true,
      },
    });
    return ClassDbo.fromDb(created).toModel();
  }

  async update(cls: Class) {
    const id = cls.id;
    const classCandidate: ClassCandidate = {
      name: cls.name,
      casterType: cls.casterType,
      hitDice: cls.hitDice,
      savingThrows: cls.savingThrows.map((ability) => ability.id),
      subClass: cls.subClass,
    };

    const updated = await this.database.class.update({
      where: { id },
      data: ClassCandidateDbo.fromModel(classCandidate).toDb(),
      include: {
        savingThrows: true,
      },
    });
    return ClassDbo.fromDb(updated).toModel();
  }

  async delete(id: bigint) {
    await this.database.class.delete({
      where: { id },
    });
  }
}
