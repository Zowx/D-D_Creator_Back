import { Injectable, NotFoundException } from '@nestjs/common';
import { Alignment } from '@app/core/models/alignment.model';
import { AlignmentsRepository } from '@app/core/repositories/alignments.repository';
import { UpdateAlignmentDto } from '@UI/dto/alignments/update-alignment.dto';

@Injectable()
export class AlignmentsService {
  constructor(private readonly repository: AlignmentsRepository) {}

  async create(alignment: Alignment): Promise<Alignment> {
    return this.repository.create(alignment);
  }

  async findAll(): Promise<Alignment[]> {
    return this.repository.findAll();
  }

  async findOne(id: bigint): Promise<Alignment> {
    const alignment = await this.repository.findOne(id);
    if (!alignment) {
      throw new NotFoundException(`Alignment with id ${id} not found`);
    }
    return alignment;
  }

  async update(id: bigint, dto: UpdateAlignmentDto): Promise<Alignment> {
    const existing = await this.repository.findOne(id);
    if (!existing) {
      throw new NotFoundException(`Alignment with id ${id} not found`);
    }

    const updated: Alignment = {
      ...existing,
      ...dto.toModel?.(),
      id,
    };

    return this.repository.update(updated);
  }

  async remove(id: bigint): Promise<void> {
    const existing = await this.repository.findOne(id);
    if (!existing) {
      throw new NotFoundException(`Alignment with id ${id} not found`);
    }
    await this.repository.remove(id);
  }
}
