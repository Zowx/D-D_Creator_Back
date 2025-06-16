import { Injectable } from '@nestjs/common';
import { DatabaseService } from '@repository/database.service';

import { Skill, SkillCandidate } from '@core/models/models';
import { SkillDbo, SkillCandidateDbo } from './dbo/skill.dbo';

@Injectable()
export class SkillsRepository {
  constructor(private readonly database: DatabaseService) {}

  async findAll(): Promise<Skill[]> {
    const skills = await this.database.skill.findMany();
    return skills.map((sk) => SkillDbo.fromDb(sk).toModel());
  }

  async findById(id: bigint): Promise<Skill | null> {
    const sk = await this.database.skill.findUnique({
      where: { id },
    });
    if (!sk) return null;
    return SkillDbo.fromDb(sk).toModel();
  }

  async findByName(name: string): Promise<Skill | null> {
    const sk = await this.database.skill.findUnique({
      where: { name },
    });
    if (!sk) return null;
    return SkillDbo.fromDb(sk).toModel();
  }

  async create(candidate: SkillCandidate): Promise<Skill> {
    const dbo = SkillCandidateDbo.fromModel(candidate);
    const created = await this.database.skill.create({
      data: dbo.toDb(),
    });
    return SkillDbo.fromDb(created).toModel();
  }

  async update(skill: Skill): Promise<Skill> {
    const dbo = SkillCandidateDbo.fromModel({
      name: skill.name,
      description: skill.description,
      abilityId: skill.abilityId,
    });
    const updated = await this.database.skill.update({
      where: { id: skill.id },
      data: dbo.toDb(),
    });
    return SkillDbo.fromDb(updated).toModel();
  }

  async delete(id: bigint): Promise<void> {
    await this.database.skill.delete({
      where: { id },
    });
  }
}
