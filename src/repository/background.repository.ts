import { Background, BackgroundCandidate } from '@app/core/models/models';
import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@repository/database.service';
import { BackgroundCandidateDbo, BackgroundDbo } from './dbo/dbo';

@Injectable()
export class BackgroundsRepository {

    constructor(private readonly database: DatabaseService) { }

    async findAll(): Promise<Background[]> {
    const dbResults = await this.database.background.findMany({
        include: {
            ability: true,
            skills: {
                include: {
                    BackgroundSkillSkill: true,
                },
            },
            languages: true,
        },
    });

    return dbResults.map((background) =>
        BackgroundDbo.fromDb(background).toModel(),
    );
}

    async findById(id: bigint): Promise<Background | null> {
        const dbResult = await this.database.background.findUnique({
            where: { id },
        });

        return dbResult ? BackgroundDbo.fromDb(dbResult).toModel() : null;
    }

    async create(background: BackgroundCandidate): Promise<Background> {
        const created = await this.database.background.create({
            data: BackgroundCandidateDbo.fromModel(background).toDb()
        });

        return BackgroundDbo.fromDb(created).toModel();
    }

    async update(background: Background): Promise<Background> {
        const updated = await this.database.background.update({
            where: { id: background.id },
            data: BackgroundDbo.fromModel(background).toDb(),
        });

        return BackgroundDbo.fromDb(updated).toModel();
    }

    async delete(id: bigint): Promise<void> {
        await this.database.background.delete({
            where: { id },
        });
    }
}