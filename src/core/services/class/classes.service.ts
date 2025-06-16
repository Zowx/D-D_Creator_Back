import { Injectable, NotFoundException } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { Class, ClassCandidate } from '@app/core/models/class.model';

@Injectable()
export class ClassesService {
  private classes: Class[] = [];

  private generateId(): bigint {
    return BigInt('0x' + randomBytes(8).toString('hex'));
  }

  findAll(): Class[] {
    return this.classes;
  }

  findOne(id: bigint): Class {
    const cls = this.classes.find(c => c.id === id);
    if (!cls) throw new NotFoundException(`Class ${id} introuvable`);
    return cls;
  }

  create(dto: ClassCandidate): Class {
    const newId = this.generateId();
    const newClass: Class = {
      id: newId,
      name: dto.name,
      hitDice: dto.hitDice,
      savingThrows: dto.savingThrows.map(n => BigInt(n)),
      subClass: dto.subClass !== undefined ? BigInt(dto.subClass) : undefined,
    };
    this.classes.push(newClass);
    return newClass;
  }

  update(dto: Class): Class {
    const existing = this.findOne(dto.id);
    const updated: Class = {
      ...existing,
      ...(dto.name !== undefined && { name: dto.name }),
      ...(dto.hitDice !== undefined && { hitDice: dto.hitDice }),
      ...(dto.savingThrows !== undefined && {
        savingThrows: dto.savingThrows.map(n => BigInt(n)),
      }),
      ...(dto.subClass !== undefined && { subClass: BigInt(dto.subClass) }),
    };
    this.classes = this.classes.map(c => (c.id === dto.id ? updated : c));
    return updated;
  }

  remove(id: bigint): void {
    this.findOne(id);
    this.classes = this.classes.filter(c => c.id !== id);
  }
}