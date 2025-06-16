import { Skill, SkillCandidate } from "@core/models/models";

export class SkillDbo {
    id: bigint;
    name: string;
    description: string;
    abilityId: bigint;

    constructor(id: bigint, name: string, description: string, ability: bigint) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.abilityId = ability;
    }

    static fromModel(model: Skill): SkillDbo {
        return new SkillDbo(
            model.id,
            model.name,
            model.description,
            model.abilityId
        );
    }

    toModel(): Skill {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            abilityId: this.abilityId,
        };
    }

    static fromDb(dbData: any): SkillDbo {
        return new SkillDbo(
            dbData.id,
            dbData.name,
            dbData.description,
            dbData.abilityId,
        );
    }

    toDb(): any {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            ability: this.abilityId,
        };
    }
}

export class SkillCandidateDbo {
    name: string;
    description: string;
    abilityId: bigint;

    constructor(data?: Partial<SkillCandidateDbo>) {
        Object.assign(this, data);
    }

    static fromModel(model: SkillCandidate): SkillCandidateDbo {
        return new SkillCandidateDbo({
            name: model.name,
            description: model.description,
            abilityId: model.abilityId,
        });
    }

    toDb(): any {
        return {
            name: this.name,
            description: this.description,
            ability: {
                connect: { id: this.abilityId }
            },
        };
    }
}
