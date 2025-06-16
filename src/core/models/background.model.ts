export interface Background {
    id: bigint;
    name: string;
    description: string;
    ability: BackgroundAbility[];
    abilityChoice: number;
    skills: BackgroundSkill[];
    skillChoice: number;
    languages: BackgroundLanguage[];
    languagesChoice: number;
    connectionAndMemento: string;
    adventuresAndAdvancement: string;
    featureName: string;
    featureDescription: string;
}

export interface BackgroundCandidate {
    name: string;
    description: string;
    ability: BackgroundAbilityCandidate[];
    abilityChoice: number;
    skills: BackgroundSkillCandidate[];
    skillChoice: number;
    languages: BackgroundLanguageCandidate[];
    languagesChoice: number;
    connectionAndMemento: string;
    adventuresAndAdvancement: string;
    featureName: string;
    featureDescription: string;
}

// inferface Between Background and Ability

export interface BackgroundAbility {
    id: bigint;
    AbilityId: bigint;
    value: number;
    BackgroundId: bigint;
}

export interface BackgroundAbilityCandidate {
    AbilityId: bigint;
    value: number;
}

// inferface Between Background and Skill

export interface BackgroundSkill {
    id: bigint;
    SkillsIds: bigint[];
    BackgroundId: bigint;
}

export interface BackgroundSkillCandidate {
    SkillsIds: bigint[];
}

// inferface Between Background and Language
export interface BackgroundLanguage {
    id: bigint;
    LanguageId: bigint;
    BackgroundId: bigint;
}

export interface BackgroundLanguageCandidate {
    LanguageId: bigint;
}