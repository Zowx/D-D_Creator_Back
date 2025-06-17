import {
    Background,
    BackgroundCandidate,
    BackgroundAbility,
    BackgroundAbilityCandidate,
    BackgroundSkill,
    BackgroundSkillCandidate,
    BackgroundLanguage,
    BackgroundLanguageCandidate
} from "@core/models/models";

export class BackgroundAbilityDbo {
    id?: bigint;
    AbilityId: bigint;
    value: number;
    BackgroundId?: bigint;

    constructor(data: Partial<BackgroundAbilityDbo>) {
        Object.assign(this, data);
    }

    static fromModel(model: BackgroundAbility): BackgroundAbilityDbo {
        return new BackgroundAbilityDbo({
            id: model.id,
            AbilityId: model.AbilityId,
            value: model.value,
            BackgroundId: model.BackgroundId,
        });
    }

    toModel(): BackgroundAbility {
        return {
            id: this.id!,
            AbilityId: this.AbilityId,
            value: this.value,
            BackgroundId: this.BackgroundId!,
        };
    }

    toDb(): any {
        return {
            id: this.id,
            AbilityId: this.AbilityId,
            value: this.value,
            BackgroundId: this.BackgroundId,
        };
    }
}

export class BackgroundSkillDbo {
    id?: bigint;
    SkillsIds: bigint[];
    BackgroundId?: bigint;

    constructor(data: Partial<BackgroundSkillDbo>) {
        Object.assign(this, data);
    }

    static fromModel(model: BackgroundSkill): BackgroundSkillDbo {
        return new BackgroundSkillDbo({
            id: model.id,
            SkillsIds: model.SkillsIds,
            BackgroundId: model.BackgroundId,
        });
    }

    toModel(): BackgroundSkill {
        return {
            id: this.id!,
            SkillsIds: this.SkillsIds,
            BackgroundId: this.BackgroundId!,
        };
    }

    toDb(): any {
        return {
            id: this.id,
            SkillsIds: this.SkillsIds,
            BackgroundId: this.BackgroundId,
        };
    }
}

export class BackgroundLanguageDbo {
    id?: bigint;
    LanguageId: bigint;
    BackgroundId?: bigint;

    constructor(data: Partial<BackgroundLanguageDbo>) {
        Object.assign(this, data);
    }

    static fromModel(model: BackgroundLanguage): BackgroundLanguageDbo {
        return new BackgroundLanguageDbo({
            id: model.id,
            LanguageId: model.LanguageId,
            BackgroundId: model.BackgroundId,
        });
    }

    toModel(): BackgroundLanguage {
        return {
            id: this.id!,
            LanguageId: this.LanguageId,
            BackgroundId: this.BackgroundId!,
        };
    }

    toDb(): any {
        return {
            id: this.id,
            LanguageId: this.LanguageId,
            BackgroundId: this.BackgroundId,
        };
    }
}

export class BackgroundDbo {
    id: bigint;
    name: string;
    description: string;
    ability: bigint[];
    abilityChoice: number;
    skills: bigint[];
    skillChoice: number;
    languages: bigint[];
    languagesChoice: number;
    connectionAndMemento: string;
    adventuresAndAdvancement: string;
    featureName: string;
    featureDescription: string;

    constructor(data: Partial<BackgroundDbo>) {
        Object.assign(this, data);
    }

    static fromModel(model: Background): BackgroundDbo {
        return new BackgroundDbo({
            id: model.id,
            name: model.name,
            description: model.description,
            ability: model.abilityIds,
            abilityChoice: model.abilityChoice,
            skills: model.skillsIds,
            skillChoice: model.skillChoice,
            languages: model.languagesIds,
            languagesChoice: model.languagesChoice,
            connectionAndMemento: model.connectionAndMemento,
            adventuresAndAdvancement: model.adventuresAndAdvancement,
            featureName: model.featureName,
            featureDescription: model.featureDescription,
        });
    }

    toModel(): Background {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            abilityIds: this.ability,
            abilityChoice: this.abilityChoice,
            skillsIds: this.skills,
            skillChoice: this.skillChoice,
            languagesIds: this.languages,
            languagesChoice: this.languagesChoice,
            connectionAndMemento: this.connectionAndMemento,
            adventuresAndAdvancement: this.adventuresAndAdvancement,
            featureName: this.featureName,
            featureDescription: this.featureDescription,
        };
    }

    static fromDb(db: any): BackgroundDbo {
        return new BackgroundDbo({
            ...db,
            ability: db.ability?.map((a: any) => new BackgroundAbilityDbo(a)),
            skills: db.skills?.map((s: any) => new BackgroundSkillDbo(s)),
            languages: db.languages?.map((l: any) => new BackgroundLanguageDbo(l)),
        });
    }

    toDb(): any {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            ability: this.ability,
            abilityChoice: this.abilityChoice,
            skills: this.skills,
            skillChoice: this.skillChoice,
            languages: this.languages,
            languagesChoice: this.languagesChoice,
            connectionAndMemento: this.connectionAndMemento,
            adventuresAndAdvancement: this.adventuresAndAdvancement,
            featureName: this.featureName,
            featureDescription: this.featureDescription,
        };
    }
}

export class BackgroundAbilityCandidateDbo {
    AbilityId: bigint;
    value: number;

    constructor(data?: Partial<BackgroundAbilityCandidateDbo>) {
        Object.assign(this, data);
    }

    static fromModel(model: BackgroundAbilityCandidate): BackgroundAbilityCandidateDbo {
        return new BackgroundAbilityCandidateDbo({
            AbilityId: model.AbilityId,
            value: model.value,
        });
    }

    toDb(): any {
        return {
            Ability: { connect: { id: this.AbilityId } },
            value: this.value,
        };
    }

}

export class BackgroundSkillCandidateDbo {
    SkillsIds: bigint[];

    constructor(data?: Partial<BackgroundSkillCandidateDbo>) {
        Object.assign(this, data);
    }

    static fromModel(model: BackgroundSkillCandidate): BackgroundSkillCandidateDbo {
        return new BackgroundSkillCandidateDbo({
            SkillsIds: model.SkillsIds,
        });
    }

    toDb(): any {
    return {
        BackgroundSkillSkill: {
            create: this.SkillsIds.map(id => ({
                Skill: { connect: { id } }
            }))
        }
    };
}

}

export class BackgroundLanguageCandidateDbo {
    LanguageId: bigint;

    constructor(data?: Partial<BackgroundLanguageCandidateDbo>) {
        Object.assign(this, data);
    }

    static fromModel(model: BackgroundLanguageCandidate): BackgroundLanguageCandidateDbo {
        return new BackgroundLanguageCandidateDbo({
            LanguageId: model.LanguageId,
        });
    }

    toDb(): any {
        return {
            Language: {
                connect: { id: this.LanguageId }
            }
        };
    }

}

export class BackgroundCandidateDbo {
    name: string;
    description: string;
    ability: BackgroundAbilityCandidateDbo[];
    abilityChoice: number;
    skills: BackgroundSkillCandidateDbo[];
    skillChoice: number;
    languages: BackgroundLanguageCandidateDbo[];
    languagesChoice: number;
    connectionAndMemento: string;
    adventuresAndAdvancement: string;
    featureName: string;
    featureDescription: string;

    constructor(data?: Partial<BackgroundCandidateDbo>) {
        Object.assign(this, data);
    }

    static fromModel(model: BackgroundCandidate): BackgroundCandidateDbo {
        return new BackgroundCandidateDbo({
            name: model.name,
            description: model.description,
            abilityChoice: model.abilityChoice,
            skillChoice: model.skillChoice,
            languagesChoice: model.languagesChoice,
            ability: model.ability.map(BackgroundAbilityCandidateDbo.fromModel),
            skills: model.skills.map(BackgroundSkillCandidateDbo.fromModel),
            languages: model.languages.map(BackgroundLanguageCandidateDbo.fromModel),
            connectionAndMemento: model.connectionAndMemento,
            adventuresAndAdvancement: model.adventuresAndAdvancement,
            featureName: model.featureName,
            featureDescription: model.featureDescription,
        });
    }

    toDb(): any {
        return {
            name: this.name,
            description: this.description,
            abilityChoice: this.abilityChoice ?? 0,
            skillChoice: this.skillChoice ?? 0,
            languagesChoice: this.languagesChoice ?? 0,
            abilities: {
                create: this.ability.map(a => a.toDb())
            },
            skills: {
                create: this.skills.map(s => s.toDb())
            },
            languages: {
                create: this.languages.map(l => l.toDb())
            },
            connectionAndMemento: this.connectionAndMemento,
            adventuresAndAdvancement: this.adventuresAndAdvancement,
            featureName: this.featureName,
            featureDescription: this.featureDescription,
        };
    }

}
