import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@repository/database.service';
import { Race, RaceCandidate } from '@app/core/models/models';
import { RaceDbo, RaceCandidateDbo } from './dbo/races.dbo';

@Injectable()
export class RacesRepository {
    constructor(private readonly database: DatabaseService) {}

    async findAll(): Promise<Race[]> {
        const results = await this.database.race.findMany();
        return results.map((race) => RaceDbo.fromDb(race).toModel());
    }

    async findById(id: bigint): Promise<Race> {
        const result = await this.database.race.findUnique({
            where: { id },
        });
        return RaceDbo.fromDb(result).toModel();
    }

    async create(race: RaceCandidate) {
        return await this.database.race.create({
            data: RaceCandidateDbo.fromModel(race).toDb(),
        });
    }

    async update(race: Race) {
        return await this.database.race.update({
            where: { id: race.id },
            data: RaceDbo.fromModel(race).toDb(),
        });
    }

    async delete(id: bigint) {
        return await this.database.race.delete({
            where: { id },
        });
    }
}
