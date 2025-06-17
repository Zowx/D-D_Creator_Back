import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@repository/database.service';
import { Ability, AbilityCandidate } from '@app/core/models/models';
import { AbilityCandidateDbo, AbilityDbo } from './dbo/dbo';

@Injectable()
export class AbilitiesRepository {
    constructor(private readonly database: DatabaseService) { }

    async findAll() {
        return (await this.database.ability.findMany()).map(
            (ability) => AbilityDbo.fromDb(ability).toModel());
    }

    async findById(id: bigint) {
        return AbilityDbo.fromDb(
            await this.database.ability.findUnique({
                where: { id },
            }),
        ).toModel();
    }

    async create(ability: AbilityCandidate) {
        return this.database.ability.create({
            data: AbilityCandidateDbo.fromModel(ability).toDb(),
        });
    }

    async update(ability: Ability) {
        const id = ability.id;
        return this.database.ability.update({
            where: { id },
            data: AbilityCandidateDbo.fromModel(ability).toDb(),
        });
    }

    async delete(id: bigint) {
        return this.database.ability.delete({
            where: { id },
        });
    }
}
