import { Injectable, NotFoundException } from '@nestjs/common';
import { LanguageCandidate } from '@app/core/models/language.model';
import { LanguagesRepository } from '@repository/repository';
import { Language } from '@app/core/models/language.model';

@Injectable()
export class LanguagesService {
  constructor(private readonly languagesRepository: LanguagesRepository) {}

  async findAll(): Promise<Language[]> {
    return await this.languagesRepository.findAll();
  }

  async findOne(id: bigint): Promise<Language> {
    const language = await this.languagesRepository.findById(id);
    if (!language) {
      throw new NotFoundException(`Language with id ${id} not found`);
    }
    return language;
  }

  async create(candidate: LanguageCandidate): Promise<Language> {
    return await this.languagesRepository.create(candidate);
  }

  async update(dto: Language): Promise<Language> {
    const existing = await this.languagesRepository.findById(dto.id);
    if (!existing) {
      throw new NotFoundException(`Language with id ${dto.id} not found`);
    }
    return await this.languagesRepository.update(dto);
  }

  async remove(id: bigint): Promise<void> {
    const existing = await this.languagesRepository.findById(id);
    if (!existing) {
      throw new NotFoundException(`Language with id ${id} not found`);
    }
    await this.languagesRepository.delete(id);
  }
}