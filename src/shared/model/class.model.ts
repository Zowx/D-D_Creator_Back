import { Ability } from "./ability.model";

export interface Class {
    id: bigint;
    name: string;
    casterType: string;
    hitDie: number;
    savingThrows: bigint[];
    subClass?: bigint;
}

export interface ClassCandidate {
    name: string;
    casterType: string;
    hitDie: number;
    savingThrows: bigint[];
    subClass?: bigint;
}