import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@repository/database.service';
import { Skill, SkillCandidate } from '@app/core/models/models';
import { SkillCandidateDbo, SkillDbo } from './dbo/skill.dbo';

@Injectable()
export class SkillRepository {

    constructor(private readonly database: DatabaseService) { }

    async findAll() {
        return (await this.database.skill.findMany()).map(
            (skill) => SkillDbo.fromDb(skill).toModel());
    }

    async findById(id: bigint) {
        return SkillDbo.fromDb(
            await this.database.skill.findUnique({
                where: { id },
            }),
        ).toModel();
    }

    async create(skill: SkillCandidate) {
        return this.database.skill.create({
            data: SkillCandidateDbo.fromModel(skill).toDb(),
        });
    }

    async update(skill: Skill) {
        const id = skill.id;
        return this.database.skill.update({
            where: { id },
            data: SkillCandidateDbo.fromModel(skill).toDb(),
        });
    }

    async delete(id: bigint) {
        return this.database.alignment.delete({
            where: { id },
        });

    }
}