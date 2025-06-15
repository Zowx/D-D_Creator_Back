export interface Skill {
    id: bigint;
    name: string;
    description: string;
    abilityId: bigint;
}

export interface SkillCandidate {
    name: string;
    description: string;
    abilityId: bigint;
}