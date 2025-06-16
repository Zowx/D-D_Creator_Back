import { AbilitiesRepository } from '@repository/abilities.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Ability, AbilityCandidate } from '@app/core/models/ability.model';

@Injectable()
export class AbilitiesService {

  constructor(
    private readonly AbilitiesRepository: AbilitiesRepository,
  ) {}

  async findAll(): Promise<Ability[]> {
    return await this.AbilitiesRepository.findAll();
  }

  async findOne(id: bigint) {
    const ability = await this.AbilitiesRepository.findById(id);
    if (!ability) {
      throw new NotFoundException(`Ability with id ${id} not found`);
    }
    return ability;
  }

  async create(candidate: AbilityCandidate) {
    const newAbility = await this.AbilitiesRepository.create(candidate);
    if (!newAbility) {
      throw new NotFoundException('Failed to create ability');
    }
    return newAbility;
  }

  async update(candidate: Ability) {
    const ability = await this.findOne(candidate.id);
    if (!ability) {
      throw new NotFoundException(`Ability with id ${candidate.id} not found`);
    }
    const updated = await this.AbilitiesRepository.update(candidate);
    if (!updated) {
      throw new NotFoundException(`Failed to update ability with id ${candidate.id}`);
    }
    return updated;
  }

  async remove(id: bigint) {
    await this.findOne(id);
    const deleted = await this.AbilitiesRepository.delete(id);
    if (!deleted) {
      throw new NotFoundException(`Failed to delete ability with id ${id}`);
    }
    return deleted;
  }
}