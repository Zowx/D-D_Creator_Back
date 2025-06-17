import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@repository/database.service';
import { Language, LanguageCandidate } from '@app/core/models/models';
import { LanguageCandidateDbo, LanguageDbo } from './dbo/languages.dbo';

@Injectable()
export class LanguagesRepository {

    constructor(private readonly database: DatabaseService) { }

    async findAll() {
        return (await this.database.language.findMany()).map(
            (language) => LanguageDbo.fromDb(language).toModel());
    }

    async findById(id: bigint) {
        return LanguageDbo.fromDb(
            await this.database.language.findUnique({
                where: { id },
            }),
        ).toModel();
    }

    async create(language: LanguageCandidate) {
        return await this.database.language.create({
            data: LanguageCandidateDbo.fromModel(language).toDb(),
        });
    }

    async update(language: Language) {
        const id = language.id;
        return await this.database.language.update({
            where: { id },
            data: LanguageCandidateDbo.fromModel(language).toDb(),
        });
    }

    async delete(id: bigint) {
        return await this.database.alignment.delete({
            where: { id },
        });

    }
}
