import { Injectable, NotFoundException } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';

export interface Skill {
  id: bigint;
  name: string;
  description: string;
  abilityId: bigint;
}

@Injectable()
export class SkillsService {
  private skills: Skill[] = [];

  private generateId(): bigint {
    return BigInt('0x' + randomBytes(8).toString('hex'));
  }

  findAll(): Skill[] {
    return this.skills;
  }

  findOne(id: bigint): Skill {
    const sk = this.skills.find(s => s.id === id);
    if (!sk) throw new NotFoundException(`Skill ${id} introuvable`);
    return sk;
  }

  create(dto: CreateSkillDto): Skill {
    const newSkill: Skill = {
      id: this.generateId(),
      name: dto.name,
      description: dto.description,
      abilityId: BigInt(dto.abilityId),
    };
    this.skills.push(newSkill);
    return newSkill;
  }

  update(id: bigint, dto: UpdateSkillDto): Skill {
    const existing = this.findOne(id);
    const updated: Skill = {
      ...existing,
      ...(dto.name       !== undefined && { name: dto.name }),
      ...(dto.description!== undefined && { description: dto.description }),
      ...(dto.abilityId  !== undefined && { abilityId: BigInt(dto.abilityId) }),
    };
    this.skills = this.skills.map(s => s.id === id ? updated : s);
    return updated;
  }

  remove(id: bigint): void {
    this.findOne(id);
    this.skills = this.skills.filter(s => s.id !== id);
  }
}
