import { Injectable, NotFoundException } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { CreateLanguageDto } from '@UI/dto/language/create-language.dto';
import { UpdateLanguageDto } from '@UI/dto/language/update-language.dto';

export interface Language {
  id: bigint;
  name: string;
  description: string;
  exotic: boolean;
  secret: boolean;
}

@Injectable()
export class LanguagesService {
  private languages: Language[] = [];

  private generateId(): bigint {
    return BigInt('0x' + randomBytes(8).toString('hex'));
  }

  findAll(): Language[] {
    return this.languages;
  }

  findOne(id: bigint): Language {
    const lang = this.languages.find(l => l.id === id);
    if (!lang) throw new NotFoundException(`Language ${id} introuvable`);
    return lang;
  }

  create(dto: CreateLanguageDto): Language {
    const newLang: Language = {
      id: this.generateId(),
      name: dto.name,
      description: dto.description,
      exotic: dto.exotic,
      secret: dto.secret,
    };
    this.languages.push(newLang);
    return newLang;
  }

  update(id: bigint, dto: UpdateLanguageDto): Language {
    const existing = this.findOne(id);
    const updated: Language = {
      ...existing,
      ...(dto.name !== undefined && { name: dto.name }),
      ...(dto.description !== undefined && { description: dto.description }),
      ...(dto.exotic !== undefined && { exotic: dto.exotic }),
      ...(dto.secret !== undefined && { secret: dto.secret }),
    };
    this.languages = this.languages.map(l => (l.id === id ? updated : l));
    return updated;
  }

  remove(id: bigint): void {
    this.findOne(id);
    this.languages = this.languages.filter(l => l.id !== id);
  }
}
