import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@repository/database.service';
import { Class, ClassCandidate } from '@app/core/models/models';
import { ClassCandidateDbo, ClassDbo } from './dbo/classes.dbo';

@Injectable()
export class ClassesRepository {

    constructor(private readonly database: DatabaseService) {}

    async findAll(): Promise<Class[]> {
        return (await this.database.class.findMany()).map(
            (cls) => ClassDbo.fromDb(cls).toModel()
        );
    }

    async findById(id: bigint): Promise<Class | null> {
        const dbResult = await this.database.class.findUnique({
            where: { id },
        });

        return dbResult ? ClassDbo.fromDb(dbResult).toModel() : null;
    }

    async create(candidate: ClassCandidate) {
        return this.database.class.create({
            data: ClassCandidateDbo.fromModel(candidate).toDb(),
        });
    }

    async update(cls: Class) {
        const id = cls.id;
        return this.database.class.update({
            where: { id },
            data: ClassCandidateDbo.fromModel(cls).toDb(),
        });
    }

    async delete(id: bigint) {
        return this.database.class.delete({
            where: { id },
        });
    }
}
