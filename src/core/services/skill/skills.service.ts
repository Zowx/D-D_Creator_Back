import { SkillRepository } from '@repository/repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { SkillCandidate , Skill} from '@app/core/models/skill.model';


@Injectable()
export class SkillsService {
  constructor(private readonly skillRepository: SkillRepository) {}

  async findAll(): Promise<Skill[]> {
    return await this.skillRepository.findAll();
  }

  async findOne(id: bigint): Promise<Skill> {
    const skill = await this.skillRepository.findById(id);
    if (!skill) {
      throw new NotFoundException(`Skill with id ${id} not found`);
    }
    return skill;
  }

  async create(dto: SkillCandidate): Promise<Skill> {
    return this.skillRepository.create(dto);
  }

  async update(dto: Skill): Promise<Skill> {
    const existing = await this.skillRepository.findById(dto.id);
    if (!existing) {
      throw new NotFoundException(`Skill with id ${dto.id} not found`);
    }
    return this.skillRepository.update(dto);
  }

  async remove(id: bigint): Promise<void> {
    const existing = await this.skillRepository.findById(id);
    if (!existing) {
      throw new NotFoundException(`Skill with id ${id} not found`);
    }
    await this.skillRepository.delete(id);
  }
}