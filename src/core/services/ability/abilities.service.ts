import { Injectable, NotFoundException } from '@nestjs/common';
import { Ability } from '@app/core/models/ability.model';
import { AbilitiesRepository } from '@app/core/repositories/abilities.repository';

@Injectable()
export class AbilitiesService {
  constructor(private readonly repository: AbilitiesRepository) {}

  async create(ability: Ability): Promise<Ability> {
    return this.repository.create(ability);
  }

  async findAll(): Promise<Ability[]> {
    return this.repository.findAll();
  }

  async findOne(id: bigint): Promise<Ability> {
    const ability = await this.repository.findOne(id);
    if (!ability) {
      throw new NotFoundException(`Ability with id ${id} not found`);
    }
    return ability;
  }

  async update(ability: Ability): Promise<Ability> {
    const existing = await this.repository.findOne(ability.id);
    if (!existing) {
      throw new NotFoundException(`Ability with id ${ability.id} not found`);
    }
    return this.repository.update(ability);
  }

  async remove(id: bigint): Promise<void> {
    const existing = await this.repository.findOne(id);
    if (!existing) {
      throw new NotFoundException(`Ability with id ${id} not found`);
    }
    await this.repository.remove(id);
  }
}
