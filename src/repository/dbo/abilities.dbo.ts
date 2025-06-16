import { Ability, AbilityCandidate } from "@app/core/models/models";

export class AbilityDbo {
    id: bigint;
    name: string;
    description: string;
    shortDescription: string;

    constructor(data?: Partial<AbilityDbo>) {
        Object.assign(this, data);
    }

    toModel(): Ability {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            shortDescription: this.shortDescription
        };
    }

    static fromModel(model: Ability): AbilityDbo {
        return new AbilityDbo({
            id: model.id,
            name: model.name,
            description: model.description,
            shortDescription: model.shortDescription
        });
    }

    static fromDb(dbData: any): AbilityDbo {
        return new AbilityDbo({
            id: dbData.id,
            name: dbData.name,
            description: dbData.description,
            shortDescription: dbData.shortDescription
        });
    }
}

export class AbilityCandidateDbo {
    name: string;
    description: string;
    shortDescription: string;

    constructor(data?: Partial<AbilityCandidateDbo>) {
        Object.assign(this, data);
    }

    static fromModel(model: AbilityCandidate): AbilityCandidateDbo {
        return new AbilityCandidateDbo({
            name: model.name,
            description: model.description,
            shortDescription: model.shortDescription
        });
    }

    toDb(): any {
        return {
            name: this.name,
            description: this.description,
            shortDescription: this.shortDescription
        };
    }
}