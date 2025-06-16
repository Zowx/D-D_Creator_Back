import { Injectable, NotFoundException } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { SkillCandidate , Skill} from '@app/core/models/skill.model';


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

  create(dto: SkillCandidate): Skill {
    const newSkill: Skill = {
      id: this.generateId(),
      name: dto.name,
      description: dto.description,
      abilityId: BigInt(dto.abilityId),
    };
    this.skills.push(newSkill);
    return newSkill;
  }

  update(dto: Skill): Skill {
    const existing = this.findOne(dto.id);
    return dto;
  }

  remove(id: bigint): void {
    this.findOne(id);
    this.skills = this.skills.filter(s => s.id !== id);
  }
}
