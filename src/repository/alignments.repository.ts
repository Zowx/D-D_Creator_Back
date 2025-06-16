import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@repository/database.service';
import { AlignmentCandidateDbo, AlignmentDbo } from './dbo/alignment.dbo';
import { Alignment, AlignmentCandidate } from '@core/models/models';

@Injectable()
export class AlignmentsRepository {

    constructor(private readonly database: DatabaseService) { }

    async findAll() {
        return (await this.database.alignment.findMany()).map(
            (alignment) => AlignmentDbo.fromDb(alignment).toModel());
    }

    async findById(id: bigint) {
        return AlignmentDbo.fromDb(
            this.database.alignment.findUnique({
                where: { id },
            }),
        ).toModel();
    }

    async create(alignment: AlignmentCandidate) {
        return this.database.alignment.create({
            data: AlignmentCandidateDbo.fromModel(alignment).toDb(),
        });
    }

    async update(alignment: Alignment) {
        const id = alignment.id;
        return this.database.alignment.update({
            where: { id },
            data: AlignmentCandidateDbo.fromModel(alignment).toDb(),
        });
    }

    async delete(id: bigint) {
        return this.database.alignment.delete({
            where: { id },
        });
    }
}