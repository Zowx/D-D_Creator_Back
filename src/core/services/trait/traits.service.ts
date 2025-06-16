import { Injectable, NotFoundException } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { CreateTraitDto } from '@UI/dto/trait/create-trait.dto';
import { UpdateTraitDto } from '@UI/dto/trait/update-trait.dto';

export interface Trait {
  id: bigint;
  name: string;
  description: string;
}

@Injectable()
export class TraitsService {
  private traits: Trait[] = [];

  private generateId(): bigint {
    return BigInt('0x' + randomBytes(8).toString('hex'));
  }

  findAll(): Trait[] {
    return this.traits;
  }

  findOne(id: bigint): Trait {
    const tr = this.traits.find(t => t.id === id);
    if (!tr) throw new NotFoundException(`Trait ${id} introuvable`);
    return tr;
  }

  create(dto: CreateTraitDto): Trait {
    const newTrait: Trait = {
      id: this.generateId(),
      name: dto.name,
      description: dto.description,
    };
    this.traits.push(newTrait);
    return newTrait;
  }

  update(id: bigint, dto: UpdateTraitDto): Trait {
    const existing = this.findOne(id);
    const updated: Trait = {
      ...existing,
      ...(dto.name !== undefined && { name: dto.name }),
      ...(dto.description !== undefined && { description: dto.description }),
    };
    this.traits = this.traits.map(t => (t.id === id ? updated : t));
    return updated;
  }

  remove(id: bigint): void {
    this.findOne(id);
    this.traits = this.traits.filter(t => t.id !== id);
  }
}
