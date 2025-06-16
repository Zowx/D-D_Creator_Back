import { Injectable } from '@nestjs/common';
import { DatabaseService } from '@repository/database.service';

import { Traits, TraitsCandidate } from '@core/models/models';
import { TraitsDbo, TraitsCandidateDbo } from './dbo/trait.dbo';

@Injectable()
export class TraitsRepository {
  constructor(private readonly database: DatabaseService) {}

  async findAll(): Promise<Traits[]> {
    const traits = await this.database.traits.findMany();
    return traits.map((t) => TraitsDbo.fromDb(t).toModel());
  }

  async findById(id: bigint): Promise<Traits | null> {
    const t = await this.database.traits.findUnique({
      where: { id },
    });
    if (!t) return null;
    return TraitsDbo.fromDb(t).toModel();
  }

  async findByName(name: string): Promise<Traits | null> {
    const t = await this.database.traits.findUnique({
      where: { name },
    });
    if (!t) return null;
    return TraitsDbo.fromDb(t).toModel();
  }

  async create(candidate: TraitsCandidate): Promise<Traits> {
    const dbo = TraitsCandidateDbo.fromModel(candidate);
    const created = await this.database.traits.create({
      data: dbo.toDb(),
    });
    return TraitsDbo.fromDb(created).toModel();
  }

  async update(trait: Traits): Promise<Traits> {
    const dbo = TraitsCandidateDbo.fromModel({
      name: trait.name,
      description: trait.description,
    });
    const updated = await this.database.traits.update({
      where: { id: trait.id },
      data: dbo.toDb(),
    });
    return TraitsDbo.fromDb(updated).toModel();
  }

  async delete(id: bigint): Promise<void> {
    await this.database.traits.delete({
      where: { id },
    });
  }
}
