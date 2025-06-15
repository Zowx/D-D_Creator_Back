import { Injectable, NotFoundException } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

export interface Class {
  id: bigint;
  name: string;
  casterType: string;
  hitDie: number;
  savingThrows: bigint[];
  subClass?: bigint;
}

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

  create(dto: CreateClassDto): Class {
    const newId = this.generateId();
    const newClass: Class = {
      id: newId,
      name: dto.name,
      casterType: dto.casterType,
      hitDie: dto.hitDie,
      savingThrows: dto.savingThrows.map(n => BigInt(n)),
      subClass: dto.subClass !== undefined ? BigInt(dto.subClass) : undefined,
    };
    this.classes.push(newClass);
    return newClass;
  }

  update(id: bigint, dto: UpdateClassDto): Class {
    const existing = this.findOne(id);
    const updated: Class = {
      ...existing,
      ...(dto.name !== undefined && { name: dto.name }),
      ...(dto.casterType !== undefined && { casterType: dto.casterType }),
      ...(dto.hitDie !== undefined && { hitDie: dto.hitDie }),
      ...(dto.savingThrows !== undefined && {
        savingThrows: dto.savingThrows.map(n => BigInt(n)),
      }),
      ...(dto.subClass !== undefined && { subClass: BigInt(dto.subClass) }),
    };
    this.classes = this.classes.map(c => (c.id === id ? updated : c));
    return updated;
  }

  remove(id: bigint): void {
    this.findOne(id);
    this.classes = this.classes.filter(c => c.id !== id);
  }
}
