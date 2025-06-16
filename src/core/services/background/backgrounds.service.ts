import { Injectable, NotFoundException } from '@nestjs/common';
import { Background, BackgroundCandidate } from '@app/core/models/background.model';
import { BackgroundsRepository } from '@repository/repository';

@Injectable()
export class BackgroundService {
  constructor(private readonly repository: BackgroundsRepository) {}
  
  async create(background: BackgroundCandidate): Promise<Background> {
    return this.repository.create(background);
  }

  async findOne(id: bigint): Promise<Background> {
    const bg = await this.repository.findById(id);
    if (!bg) throw new NotFoundException(`Background #${id} not found`);
    return bg;
  }

  async findAll(): Promise<Background[]> {
    return this.repository.findAll();
  }

  async update(background: Background): Promise<Background> {
    const exists = await this.repository.findById(background.id);
    if (!exists) throw new NotFoundException(`Background #${background.id} not found`);
    return this.repository.update(background);
  }

  async remove(id: bigint): Promise<void> {
    const exists = await this.repository.findById(id);
    if (!exists) throw new NotFoundException(`Background #${id} not found`);
    return this.repository.delete(id);
  }
  
}
