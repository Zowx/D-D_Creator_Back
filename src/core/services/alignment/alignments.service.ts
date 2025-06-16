import { Injectable, NotFoundException } from '@nestjs/common';
import { Alignment, AlignmentCandidate } from '@app/core/models/alignment.model';
import { AlignmentsRepository } from '@repository/repository';

@Injectable()
export class AlignmentsService {
  constructor(private readonly repository: AlignmentsRepository) {}

  async create(alignment: AlignmentCandidate): Promise<Alignment> {
    return this.repository.create(alignment);
  }

  async findAll(): Promise<Alignment[]> {
    return this.repository.findAll();
  }

  async findOne(id: bigint): Promise<Alignment> {
    const alignment = await this.repository.findById(id);
    if (!alignment) {
      throw new NotFoundException(`Alignment with id ${id} not found`);
    }
    return alignment;
  }

  async update(updated: Alignment): Promise<Alignment> {
    const existing = await this.repository.findById(updated.id);
    if (!existing) {
      throw new NotFoundException(`Alignment with id ${updated.id} not found`);
    }
    return this.repository.update(updated);
  }

  async remove(id: bigint): Promise<void> {
    const existing = await this.repository.findById(id);
    if (!existing) {
      throw new NotFoundException(`Alignment with id ${id} not found`);
    }
    await this.repository.delete(id);
  }
}