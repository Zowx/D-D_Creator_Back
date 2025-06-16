import { Injectable, NotFoundException } from '@nestjs/common';
import { Ability, AbilityCandidate } from '@core/models/ability.model';
import { AbilitiesRepository } from '@repository/repository';

@Injectable()
export class AbilitiesService {
  constructor(private readonly repository: AbilitiesRepository) {}

  async create(ability: AbilityCandidate): Promise<Ability> {
    return this.repository.create(ability);
  }

  async findAll(): Promise<Ability[]> {
    return this.repository.findAll();
  }

  async findOne(id: bigint): Promise<Ability> {
    const ability = await this.repository.findById(id);
    if (!ability) {
      throw new NotFoundException(`Ability with id ${id} not found`);
    }
    return ability;
  }

  async update(ability: Ability): Promise<Ability> {
    const existing = await this.repository.findById(ability.id);
    if (!existing) {
      throw new NotFoundException(`Ability with id ${ability.id} not found`);
    }
    return this.repository.update(ability);
  }

  async remove(id: bigint): Promise<void> {
    const existing = await this.repository.findById(id);
    if (!existing) {
      throw new NotFoundException(`Ability with id ${id} not found`);
    }
    await this.repository.delete(id);
  }
}
