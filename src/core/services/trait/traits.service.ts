import { TraitsCandidate, Traits } from '@app/core/models/traits.model';
import { Injectable, NotFoundException } from '@nestjs/common';
import { randomBytes } from 'crypto';


@Injectable()
export class TraitsService {
  private traits: Traits[] = [];

  private generateId(): bigint {
    return BigInt('0x' + randomBytes(8).toString('hex'));
  }

  findAll(): Traits[] {
    return this.traits;
  }

  findOne(id: bigint): Traits {
    const tr = this.traits.find(t => t.id === id);
    if (!tr) throw new NotFoundException(`Trait ${id} introuvable`);
    return tr;
  }

  create(dto: TraitsCandidate): Traits {
    const newTrait: Traits = {
      id: this.generateId(),
      name: dto.name,
      description: dto.description,
    };
    this.traits.push(newTrait);
    return newTrait;
  }

  update(dto: Traits): Traits {
    const existing = this.findOne(dto.id);
    return dto;
  }

  remove(id: bigint): void {
    this.findOne(id);
    this.traits = this.traits.filter(t => t.id !== id);
  }
}
