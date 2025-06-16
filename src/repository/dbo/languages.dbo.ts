import { LanguageCandidate, Language } from "@app/core/models/language.model";

export class LanguageDbo {
    id: bigint;
    name: string;
    description: string;
    exotic: boolean;
    secret: boolean;

    constructor(id: bigint, name: string, description: string, exotic: boolean, secret: boolean) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.exotic = exotic;
    }

    static fromModel(model: Language): LanguageDbo {
        return new LanguageDbo(
            model.id,
            model.name,
            model.description,
            model.exotic,
            model.secret ?? false,
        );
    }

    toModel(): Language {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            exotic: this.exotic,
            secret: this.secret,
        };
    }

    static fromDb(dbData: any): LanguageDbo {
        return new LanguageDbo(
            dbData.id,
            dbData.name,
            dbData.description,
            dbData.exotic,
            dbData.secret ?? false,
        );
    }

    toDb(): any {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            exotic: this.exotic,
        };
    }
}

export class LanguageCandidateDbo {
    name: string;
    description: string;
    exotic: boolean;
    secret: boolean;

    constructor(data?: Partial<LanguageCandidateDbo>) {
        Object.assign(this, data);
    }

    static fromModel(model: LanguageCandidate): LanguageCandidateDbo {
        return new LanguageCandidateDbo({
            name: model.name,
            description: model.description,
            exotic: model.exotic,
            secret: model.secret ?? false,
        });
    }

    toDb(): any {
        return {
            name: this.name,
            description: this.description,
            exotic: this.exotic,
            secret: this.secret ?? false,
        };
    }
}