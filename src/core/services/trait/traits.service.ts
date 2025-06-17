import { TraitsRepository } from '@repository/traits.repository';
import { TraitsCandidate, Traits } from '@app/core/models/traits.model';
import { Injectable, NotFoundException } from '@nestjs/common';


@Injectable()
export class TraitsService {
  constructor(private readonly traitsRepository: TraitsRepository) {}
  
  async findAll(): Promise<Traits[]> {
    return await this.traitsRepository.findAll();
  }

  async findOne(id: bigint): Promise<Traits> {
    const trait = await this.traitsRepository.findById(id);
    if (!trait) {
      throw new NotFoundException(`Trait with id ${id} not found`);
    }
    return trait;
  }

  async create(dto: TraitsCandidate): Promise<Traits> {
    return this.traitsRepository.create(dto);
  }

  async update(dto: Traits): Promise<Traits> {
    const existing = await this.traitsRepository.findById(dto.id);
    if (!existing) {
      throw new NotFoundException(`Trait with id ${dto.id} not found`);
    }
    return this.traitsRepository.update(dto);
  }

  async remove(id: bigint): Promise<void> {
    const existing = await this.traitsRepository.findById(id);
    if (!existing) {
      throw new NotFoundException(`Trait with id ${id} not found`);
    }
    await this.traitsRepository.delete(id);
  }
}