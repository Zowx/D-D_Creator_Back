import { Injectable, NotFoundException } from '@nestjs/common';
import { Background, BackgroundCandidate } from '@app/core/models/background.model';
import { BackgroundRepository } from './background.repository';
import { randomBytes } from 'crypto';

@Injectable()
export class BackgroundService {
  constructor(private readonly repository: BackgroundRepository) {}

    private generateId(): bigint {
      return BigInt('0x' + randomBytes(8).toString('hex'));
    }
  
  async create(background: BackgroundCandidate): Promise<Background> {
    const newId = this.generateId();
    const model: Background = {
      id: newId,
      name: background.name,
      description: background.description,
      abilityIds: background.ability.map((a) => a.AbilityId),
      abilityChoice: background.abilityChoice,
      skillsIds: background.skills.flatMap((s) => s.SkillsIds),
      skillChoice: background.skillChoice,
      languagesIds: background.languages.map((l) => l.LanguageId),
      languagesChoice: background.languagesChoice,
      connectionAndMemento: background.connectionAndMemento,
      adventuresAndAdvancement: background.adventuresAndAdvancement,
      featureName: background.featureName,
      featureDescription: background.featureDescription,
    };
    return this.repository.create(model);
  }

  async findOne(id: bigint): Promise<Background> {
    const bg = await this.repository.findOne(id);
    if (!bg) throw new NotFoundException(`Background #${id} not found`);
    return bg;
  }

  async findAll(): Promise<Background[]> {
    return this.repository.findAll();
  }

  async update(background: Background): Promise<Background> {
    const exists = await this.repository.findOne(background.id);
    if (!exists) throw new NotFoundException(`Background #${background.id} not found`);
    return this.repository.update(background.id, background);
  }

  async remove(id: bigint): Promise<void> {
    const exists = await this.repository.findOne(id);
    if (!exists) throw new NotFoundException(`Background #${id} not found`);
    return this.repository.remove(id);
  }
  
}
