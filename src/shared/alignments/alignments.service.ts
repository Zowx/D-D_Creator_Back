import { Injectable, NotFoundException } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { CreateAlignmentDto } from './dto/create-alignment.dto';
import { UpdateAlignmentDto } from './dto/update-alignment.dto';

export interface Alignment {
  id: bigint;
  name: string;
  description: string;
}

@Injectable()
export class AlignmentsService {
  private alignments: Alignment[] = [];

  private generateId(): bigint {
    return BigInt('0x' + randomBytes(8).toString('hex'));
  }

  findAll(): Alignment[] {
    return this.alignments;
  }

  findOne(id: bigint): Alignment {
    const alignment = this.alignments.find(a => a.id === id);
    if (!alignment) throw new NotFoundException(`Alignment ${id} introuvable`);
    return alignment;
  }

  create(dto: CreateAlignmentDto): Alignment {
    const newAlignment: Alignment = {
      id: this.generateId(),
      ...dto,
    };
    this.alignments.push(newAlignment);
    return newAlignment;
  }

  update(id: bigint, dto: UpdateAlignmentDto): Alignment {
    const alignment = this.findOne(id);
    const updated = { ...alignment, ...dto };
    this.alignments = this.alignments.map(a => a.id === id ? updated : a);
    return updated;
  }

  remove(id: bigint): void {
    this.findOne(id);
    this.alignments = this.alignments.filter(a => a.id !== id);
  }
}
