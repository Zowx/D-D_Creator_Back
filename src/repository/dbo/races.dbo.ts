import { RaceCandidate, Race } from "@app/core/models/race.model";
import { TraitsCandidateDbo } from "./trait.dbo";

export class RaceDbo {
    id: bigint;
    name: string;
    description: string;
    traitsId: bigint[];
    subrace_of?: bigint;

    constructor(data?: Partial<RaceDbo>) {
        Object.assign(this, data);
    }

    toModel(): Race {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            traitsId: this.traitsId,
            subrace_of: this.subrace_of
        };
    }

    static fromModel(model: Race): RaceDbo {
        return new RaceDbo({
            id: model.id,
            name: model.name,
            description: model.description,
            traitsId: model.traitsId,
            subrace_of: model.subrace_of
        });
    }

    static fromDb(dbData: any): RaceDbo {
        return new RaceDbo({
            id: dbData.id,
            name: dbData.name,
            description: dbData.description ?? '',
            traitsId: dbData.traitsId,
            subrace_of: dbData.subrace_of
        });
    }

    toDb(): any {
        return {
            id: this.id,
            name: this.name,
            description: this.description ?? '',
            traitsId: this.traitsId ? { connect: this.traitsId.map(id => ({ id })) } : undefined,
            subrace_of: this.subrace_of ? { connect: { id: this.subrace_of } } : undefined,
        };
    }
}

export class RaceCandidateDbo {
    name: string;
    description: string;
    traits: TraitsCandidateDbo[];
    subrace_of?: bigint;

    constructor(data?: Partial<RaceCandidateDbo>) {
        Object.assign(this, data);
    }

    static fromModel(model: RaceCandidate): RaceCandidateDbo {
        return new RaceCandidateDbo({
            name: model.name,
            description: model.description,
            traits: model.traits.map(trait => TraitsCandidateDbo.fromModel(trait)),
            subrace_of: model.subrace_of
        });
    }

    toDb(): any {
        return {
            name: this.name,
            description: this.description ?? '',
            traits: { create: this.traits.map(a => a.toDb()) },
            subrace_of: this.subrace_of
        };
    }
}
