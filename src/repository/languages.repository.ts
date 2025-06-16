import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@repository/database.service';
import { Language, LanguageCandidate } from '@app/core/models/models';
import { LanguageDbo, LanguageCandidateDbo } from './dbo/languages.dbo';

@Injectable()
export class LanguagesRepository {
  constructor(private readonly database: DatabaseService) {}

  async findAll(): Promise<Language[]> {
    const languages = await this.database.language.findMany();
    return languages.map((lang) => LanguageDbo.fromDb(lang).toModel());
  }

  async findById(id: bigint): Promise<Language | null> {
    const lang = await this.database.language.findUnique({
      where: { id },
    });

    if (!lang) {
      return null;
    }

    return LanguageDbo.fromDb(lang).toModel();
  }

  async findByName(name: string): Promise<Language | null> {
    const lang = await this.database.language.findUnique({
      where: { name },
    });

    if (!lang) {
      return null;
    }

    return LanguageDbo.fromDb(lang).toModel();
  }

  async create(language: LanguageCandidate): Promise<Language> {
    const created = await this.database.language.create({
      data: LanguageCandidateDbo.fromModel(language).toDb(),
    });
    return LanguageDbo.fromDb(created).toModel();
  }

  async update(language: Language): Promise<Language> {
    const id = language.id;
    const candidate: LanguageCandidate = {
      name: language.name,
      description: language.description,
      exotic: language.exotic,
      secret: language.secret,
    };

    const updated = await this.database.language.update({
      where: { id },
      data: LanguageCandidateDbo.fromModel(candidate).toDb(),
    });
    return LanguageDbo.fromDb(updated).toModel();
  }

  async delete(id: bigint): Promise<void> {
    await this.database.language.delete({
      where: { id },
    });
  }
}
